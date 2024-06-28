import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {

    const [car, setCar] = useState({
        make: '',
        model: '',
        year: '',
        price: '',
        carType: '',
        hasLeatherSeats: false
    });
    const [disabled, setDisabled] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        checkFormValidity();
    }, [car])

    const onTextChange = e => {
        const copy = { ...car };
        copy[e.target.name] = e.target.value;
        setCar(copy);
        checkFormValidity();
    }

    const checkFormValidity = () => {
        const { make, model, year, price, carType } = car;
        setIsValid(!!make && !!model && !!year && !!price && !!carType);
    };

    const onSelectChange = e => {
        const copy = { ...car };
        copy.carType = e.target.value;

        if (copy.carType == 'supercar') {
            copy.hasLeatherSeats = true;
            setDisabled(true);
        } else {
            setDisabled(false);
        }
        setCar(copy);
        checkFormValidity();
    }

    const onCheckboxChange = () => {
        const copy = { ...car };
        const isChecked = car.hasLeatherSeats;
        copy.hasLeatherSeats = !isChecked;
        setCar(copy);
    }

    const onAddClick = async () => {
        await axios.post('/api/car/addcar', { Car: car });
        navigate('/');
    }

    return (
        <div style={{marginTop: 80}}>
            <input type='text' name='make' className='form-control' placeholder='Make' value={car.make} onChange={e => onTextChange(e)} />
            <input type='text' name='model' className='form-control' placeholder='Model' value={car.model} onChange={e => onTextChange(e)} />
            <input type='text' name='year' className='form-control' placeholder='Year' value={car.year} onChange={e => onTextChange(e)} />
            <input type='text' name='price' className='form-control' placeholder='Price' value={car.price} onChange={e => onTextChange(e)} />
            <select className="form-select" onChange={e => onSelectChange(e)}>
                <option value=''>Select a category</option>
                <option value='sedan' key='1'>Sedan</option>
                <option value='SUV' key='2'>SUV</option>
                <option value='supercar' key='3'>Supercar</option>
            </select>
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="hasleatherseats" value='true' disabled={disabled} checked={car.hasLeatherSeats} onChange={onCheckboxChange} />
                <label className="form-check-label" htmlFor="hasleatherseats">Has Leather Seats</label>
            </div>
            <button className='btn btn-primary' disabled={!isValid} onClick={onAddClick}>Add Car</button>
        </div>
    )
};

export default AddCar;

//            const styles = {
//    container: {
//        textAlign: 'center',
//        margin: 'auto',
//        padding: '20px',
//    },
//    heading: {
//        fontSize: '34px',
//        marginBottom: '10px',
//        color: "green",
//        borderBottom: "3px solid green",
//        paddingBottom: 20,
//        borderRadius: "8px",
//    },
//    input: {
//        padding: '10px',
//        marginBottom: '10px',
//        width: '200px',
//        borderRadius: 8,
//    },
//    disabledButton: {
//        backgroundColor: 'gray',
//        color: 'white',
//        cursor: 'not-allowed',
//        margin: 10,
//        padding: 15,
//        borderRadius: "8px",
//        border: "none",
//        boxShadow: "0px 0px 10px 0px grey",
//    },
//    enabledButton: {
//        backgroundColor: 'green',
//        color: 'white',
//        cursor: 'pointer',
//        margin: 10,
//        padding: 15,
//        borderRadius: "8px",
//        border: "none",
//        boxShadow: "0px 0px 10px 0px grey",
//    },
//};