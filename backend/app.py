from io import BytesIO
from flask import request, jsonify, send_file
from config import app, db
from models import Paper
from werkzeug.utils import secure_filename
from sqlalchemy import or_


@app.route("/")
def home():
    return "Main Flask page here!"


@app.route('/submit', methods=['POST'])
def submit_data():
    print('made it to flask')
    if request.method == 'POST':
        key = request.form.get('key')
        print('Received key: %s', key)
        subject = request.form.get('subject')
        unit = request.form.get('unit')
        year = request.form.get('year')
        teacher = request.form.get('teacher')
        school = request.form.get('school')
        description = request.form.get('description')

        exPDF = request.files.get('exPDF')
        ansPDF = request.files.get('ansPDF')

        if exPDF:
            exPDF_filename = secure_filename(exPDF.filename)
            exPDF_data = exPDF.read()
        else:
            return jsonify({'error': 'exPDF is missing'}), 400

        if ansPDF:
            ansPDF_filename = secure_filename(ansPDF.filename)
            ansPDF_data = ansPDF.read()
        else:
            return jsonify({'error': 'ansPDF is missing'}), 400

        paper = Paper(key, subject, unit, year, teacher, school, description, exPDF_filename, exPDF_data, ansPDF_data)
        db.session.add(paper)
        db.session.commit()

        return jsonify({'message': 'success!'})



@app.route('/get-papers', methods=['GET'])
def get_papers():
    try:
        papers = Paper.query.all()
        results = [paper.to_dict() for paper in papers]
        return jsonify(results)
    except Exception as e:
        return jsonify({'error': str(e)}), 500



@app.route('/test')
def test():
    return "HEY THERE!!"



@app.route('/download/<downloadkey>/<filetype>')
def download(downloadkey, filetype):
    val= Paper.query.filter_by(key=downloadkey).first()
    if filetype == 'ex':
        file_data = val.data
        download_name = downloadkey + "-Ex.pdf"
    elif filetype == 'ans':
        file_data = val.ansdata
        download_name = downloadkey + "-Ans.pdf"
    else:
        return "Invalid file type", 400
    
    return send_file(BytesIO(file_data), download_name=download_name, as_attachment=False)


@app.route('/clear-database')
def clear_database():
    db.session.query(Paper).delete()
    db.session.commit()
    return jsonify({'message': 'database cleared!'})


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
