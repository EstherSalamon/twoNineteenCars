import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { MdRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { TiArrowDownOutline } from "react-icons/ti";
import { TiArrowUpOutline } from "react-icons/ti";

const Home = () => {

    const [cars, setCars] = useState([]);
    const [sortInt, setSortInt] = useState(1);

    useEffect(() => {

        const loadCars = async () => {
            const { data } = await axios.get('/api/car/getcars');
            setCars(data);
        };

        loadCars();

    }, []);

    const iconClick = () => {
        setSortInt(sortInt * -1);
        if (sortInt < 0) {
            cars.sort((a, b) => a.year - b.year);
        } else {
            cars.sort((a, b) => b.year - a.year);
        }
    }

    return (
        <div style={{marginTop: 80} }>
            <h1>These are cars, for those uneducated</h1>
            <a href='/addcar' className='btn btn-outline-info'>Add Car</a>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year 
                            <button style={{ borderRadius: 30 }, { marginLeft: 5 }} onClick={iconClick}>{sortInt < 0 ? <TiArrowUpOutline /> : <TiArrowDownOutline />}</button> </th>
                        <th>Price</th>
                        <th>Car Type</th>
                        <th>Has Leather Seats</th>
                    </tr>
                </thead>
                <tbody>
                    {cars && cars.sort(c => c.year).map(c => 
                        <tr key={c.id}>
                            <td>{c.make}</td>
                            <td>{c.model}</td>
                            <td>{c.year}</td>
                            <td>{c.price}</td>
                            <td>{c.carType}</td>
                            <td>{c.hasLeatherSeats ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Home;