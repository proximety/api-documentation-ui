import './ServiceList.css';
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from 'react';
import Select from 'react-select';
import { services } from '../assets/data';

const ServiceList = () => {
    const [selected, setSelected] = useState(null);

    const handleChange = (data) => {
        setSelected(data.row);
        console.log(data);
    };
    const handleSelectChange = (data) => {
        setSelected(data);
        console.log(data);
    };

    const PageTitle = () => {
        return (
            <div className= "pageTitle"> ProxiMEty API Designs</div>
        )
    }

    const columns = [
        {
            field: "id",
            headerName: "Sl No.",
            sortable: false,
            flex: 1,
            maxWidth: 100,
            headerAlign: 'center',
            align: 'center',
            
        },
        {
            field: "label",
            headerName: "Service Name",
            sortable: false,
            flex: 1,
            minWidth: 200,
            headerAlign: 'center',
            align: 'center',
        }
    ];
    if (selected) {
        return (
            <div className='rapidoc'>
                <Select className='select_style' onChange={handleSelectChange} options={services} defaultValue={{value: selected.value, label: selected.label}}>
                </Select>
                <rapi-doc
                    spec-url={selected.value}
                    theme="light"
                ></rapi-doc>
            </div>
        )
    } else {
        return (
            <>
            <PageTitle/>
            <div className='servicesList'>
                <DataGrid
                    rows={services}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableColumnMenu
                    disableSelectionOnClick
                    onRowClick={handleChange}
                />
            </div>
            </>
        )
    }

}

export default ServiceList;