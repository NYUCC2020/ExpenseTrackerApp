import React from 'react';
import { Link } from 'react-router-dom';
import { DeviceList } from './Devices/DeviceList';
import { AddDevice } from './Devices/AddDevice';

import { GlobalProvider } from '../context/GlobalState';

import '../App.css';

export const DevicePage = () => (
    <GlobalProvider>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Expense Tracker</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="/">Transactions <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/transfer">Transfer</a>
                    <a class="nav-item nav-link active" href="/devices">Devices</a>
                </div>
            </div>
            <a class="btn btn-primary" href="/login" role="button">Logout</a>
        </nav>
        <div className="container">
            <DeviceList />
            <AddDevice />
        </div>
    </GlobalProvider>
)
