import React, { useEffect, useState } from 'react';
import ExerciseCards from './ExerciseCards';

export default function Home() {
    return (
        <ExerciseCards subject="Physics 11" unit="Waves" year="2022" teacher="Ms Wharton" school="Eric Hamper Secondary School" />
    );
}