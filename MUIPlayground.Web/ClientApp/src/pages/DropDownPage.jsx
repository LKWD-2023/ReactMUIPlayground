import { useState } from 'react';
import { Autocomplete, TextField, Typography } from "@mui/material";
import { faker } from '@faker-js/faker';

const people = Array.from(Array(100)).map((_, idx) => ({
    id: idx,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 1, max: 100 })
}));

const peopleWithLabels = people.map(p => ({
    ...p,
    label: `${p.firstName} ${p.lastName}`
}));

export default function DropDownPage() {

    const [selectedPerson, setSelectedPerson] = useState(null);

    return (
        <>
            {selectedPerson && <Typography variant='h4'>
                <pre>
                    {JSON.stringify(selectedPerson, null, 2)}
                </pre>
            </Typography>}
            <Autocomplete
                disablePortal
                value={selectedPerson}
                onChange={(e, person) => setSelectedPerson(person)}
                options={peopleWithLabels}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="People" />}
            />
        </>
    );
}