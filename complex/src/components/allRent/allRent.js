import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import './allRent.sass'
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const AllRent = ({ children }) => {

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='maps'>
            <div className="text-center sort">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Склад</MenuItem>
                        <MenuItem value={20}>Кімната</MenuItem>
                        <MenuItem value={30}>Тощо</MenuItem>
                    </Select>
                </FormControl>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>Найдорожчі</Button>

                    <Button>Найдешевші</Button>
                </ButtonGroup>
            </div>
            <div className="row">

                <DepartureList className='row'/>
            </div>

        </div>



    );
};
class DepartureList extends Component {
    constructor(props) {
        super(props);



        this.state = {houses: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/house')
            .then(response => {
                this.setState({ houses: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    departureList() {
        const item = this.state.houses.map(value =>{
            return <div className="col-md-4 ">
                <div className=" bg-white append-news news-item text-center">
                    <div className="crop sin">
                        <img width='100%' src={value.img[0].link}
                             alt="Житло"/>
                    </div>
                    <h3 className="news-date">{value.name}</h3>
                    <hr/>
                    <div className="inf">
                        <p>Кількість містць: <span className='morrrr'>{value.seats}</span></p>
                        <p>Тип приміщення: <span className='morrrr'>{value.type}</span></p>

                    </div>
                    <div className="inf">
                        <p>Проща: <span className='morrrr'>{value.format}</span></p>
                        <p>Ціна: <span className='morrrr'>{value.prise}</span> грн</p>

                    </div>
                    <hr/>
                    <p className="news-desc">
                        Адреса - {value.map}
                    </p>
                    <p className="news-desc">
                        {value.about.slice(0, 70)}
                    </p>
                    <hr/>
                    <Button сlassName = 'headerBtn'
                            variant="contained"
                            color="inherit"
                            size="small"
                    >

                        <Link to={`/${value.id}`}>Орендувати</Link>
                    </Button>
                </div>
            </div>
        })

        return item
    }


    render() {
        return (
            <div className='row'>
                { this.departureList() }
            </div>
        )
    }
}
