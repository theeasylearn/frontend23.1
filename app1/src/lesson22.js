import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function EMICalculator() {
    //create state variables 
    let [amount, setAmount] = useState(1000000);
    let [rate, setRate] = useState(10);
    let [year, setYear] = useState(15);
    let [emi,setEmi] = useState(0);

    let CalculateEMI = function () {
        var principal = parseFloat(amount);
        var rateOfInterest = parseFloat(rate)/100/12 ;
        var numberOfPayments = parseFloat(year) * 12;

        var result = (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) /
            (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);
        setEmi(result.toFixed(2));
    }

    useEffect(() => {
        CalculateEMI();
    });

    return (<div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>EMI Calculator</h1>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-8 offset-2'>
                <div className='card'>
                    <div className='card-body'>
                        <div>
                            <label htmlFor="amount">Amount {amount}</label>
                            <input type="range" id="amount" name="amount" min={0} max='5000000' step='1000' onChange={(e) => setAmount(e.target.value)} defaultValue='1000000' />
                        </div>
                        <div>
                            <label htmlFor="rate">Rate {rate}</label>
                            <input type="range" id="rate" name="rate" min={0} max='18' step='0.5' onChange={(e) => setRate(e.target.value)} defaultValue='10' />
                        </div>
                        <div>
                            <label htmlFor="year">Year {year}</label>
                            <input type="range" id="year" name="year" min={1} max='30' step='1' onChange={(e) => setYear(e.target.value)} defaultValue='15' />
                        </div>
                        <h3>{emi}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EMICalculator />);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class FilterExample extends React.Component {
    constructor(props) {
        super(props);
        this.original = this.props.countries;
        this.state = {
            countries: this.props.countries
        }
    }
    DisplayCountry = (item, index) => {
        return (<div className='col-lg-3 mb-3' key={index}>
            <div className='card shadow' >
                <img src={item.flag} className='card-img-top' />
                <div className='card-body d-flex justify-content-between'>
                    <h5>{item.name}</h5>
                    <i className='fa fa-trash fa-2x' onClick={() => this.DeleteCountry(item)}></i>
                </div>
                <div className='card-footer'>
                    {item.continent}
                </div>
            </div>
        </div>)
    }
    //arrow function 
    onChangeInput = (event) => {
        if (event.target.name == 'country_name') {
            let countryName = event.target.value;
            console.log(countryName);
            this.setState({
                [event.target.name]: event.target.value
            });

            if (countryName == '') {
                this.setState({
                    countries: this.original
                });
            }
            else {
                let temp = this.state.countries.filter((item) => {
                    if (item.name.toLowerCase().includes(countryName) == true)
                        return item;
                });
                this.setState({
                    countries: temp
                })
            }
        }
        else {
            var SelectedContinent = event.target.value.toLowerCase();
            console.log(SelectedContinent,SelectedContinent.length);
            let temp = this.original.filter((item) => {
                console.log(item.continent.toLowerCase());
                if (item.continent.toLowerCase().includes(SelectedContinent) == true)
                    return item;
            });
            this.setState({
                countries: temp
            });
        }
    }
    render() {
        let blocks = this.state.countries.map((item, index) => this.DisplayCountry(item, index));
        return (<>
            <div className='container-fluid bg-light p-3'>
                <div className='row'>
                    <div className='col-12'>
                        <form className="row row-cols-lg-auto g-3 align-items-center">
                            <div className="col-12">
                                <label className="visually-hidden" htmlFor="country_name">Country Name</label>
                                <div className="input-group">
                                    <div className="input-group-text">@</div>
                                    <input name='country_name' type="text" className="form-control" id="country_name" placeholder="Country Name" value={this.state.country_name} onChange={this.onChangeInput} />
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="visually-hidden" htmlFor="inlineFormSelectPref">Continent</label>
                                <select name='continent' className="form-select" id="inlineFormSelectPref" onChange={this.onChangeInput}>
                                    <option selected>Continent</option>
                                    <option value='asia'>asia</option>
                                    <option value='Europe'>Europe</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {blocks}
                </div>
            </div>
        </>);
    }
}
function Page() {
    // array of objects
    let countries = [
        { "name": "Germany", "flag": "https://flagpedia.net/data/flags/w580/de.png", "continent": "Europe" },
        { "name": "United Kingdom", "flag": "https://flagpedia.net/data/flags/w580/gb.png", "continent": "Europe" },
        { "name": "France", "flag": "https://flagpedia.net/data/flags/w580/fr.png", "continent": "Europe" },
        { "name": "Italy", "flag": "https://flagpedia.net/data/flags/w580/it.png", "continent": "Europe" },
        { "name": "Spain", "flag": "https://flagpedia.net/data/flags/w580/es.png", "continent": "Europe" },
        { "name": "Netherlands", "flag": "https://flagpedia.net/data/flags/w580/nl.png", "continent": "Europe" },
        { "name": "Belgium", "flag": "https://flagpedia.net/data/flags/w580/be.png", "continent": "Europe" },
        { "name": "Switzerland", "flag": "https://flagpedia.net/data/flags/w580/ch.png", "continent": "Europe" },
        { "name": "Austria", "flag": "https://flagpedia.net/data/flags/w580/at.png", "continent": "Europe" },
        { "name": "Portugal", "flag": "https://flagpedia.net/data/flags/w580/pt.png", "continent": "Europe" },
        { "name": "Sweden", "flag": "https://flagpedia.net/data/flags/w580/se.png", "continent": "Europe" },
        { "name": "Norway", "flag": "https://flagpedia.net/data/flags/w580/no.png", "continent": "Europe" },
        { "name": "Denmark", "flag": "https://flagpedia.net/data/flags/w580/dk.png", "continent": "Europe" },
        { "name": "Finland", "flag": "https://flagpedia.net/data/flags/w580/fi.png", "continent": "Europe" },
        { "name": "Greece", "flag": "https://flagpedia.net/data/flags/w580/gr.png", "continent": "Europe" },
        { "name": "Poland", "flag": "https://flagpedia.net/data/flags/w580/pl.png", "continent": "Europe" },
        { "name": "Czech Republic", "flag": "https://flagpedia.net/data/flags/w580/cz.png", "continent": "Europe" },
        { "name": "Hungary", "flag": "https://flagpedia.net/data/flags/w580/hu.png", "continent": "Europe" },
        { "name": "Ireland", "flag": "https://flagpedia.net/data/flags/w580/ie.png", "continent": "Europe" },
        { "name": "Slovakia", "flag": "https://flagpedia.net/data/flags/w580/sk.png", "continent": "Europe" },
        { "name": "China", "flag": "https://flagpedia.net/data/flags/w580/cn.png", "continent": "Asia" },
        { "name": "India", "flag": "https://flagpedia.net/data/flags/w580/in.png", "continent": "Asia" },
        { "name": "Japan", "flag": "https://flagpedia.net/data/flags/w580/jp.png", "continent": "Asia" },
        { "name": "South Korea", "flag": "https://flagpedia.net/data/flags/w580/kr.png", "continent": "Asia" },
        { "name": "Indonesia", "flag": "https://flagpedia.net/data/flags/w580/id.png", "continent": "Asia" },
        { "name": "Vietnam", "flag": "https://flagpedia.net/data/flags/w580/vn.png", "continent": "Asia" },
        { "name": "Thailand", "flag": "https://flagpedia.net/data/flags/w580/th.png", "continent": "Asia" },
        { "name": "Pakistan", "flag": "https://flagpedia.net/data/flags/w580/pk.png", "continent": "Asia" },
        { "name": "Bangladesh", "flag": "https://flagpedia.net/data/flags/w580/bd.png", "continent": "Asia" },
        { "name": "Malaysia", "flag": "https://flagpedia.net/data/flags/w580/my.png", "continent": "Asia" }
    ];
    return (
        <FilterExample countries={countries} />
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
