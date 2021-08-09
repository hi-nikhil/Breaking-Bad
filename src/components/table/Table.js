import React from 'react'
import './Table.css'
import { useHistory } from 'react-router-dom';
import Spinner from '../ui/Spinner'

function Table({items}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Dob</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            { (items.length > 0) ? items.map( (item,char_id) => {
           return (
            <tr key={ char_id } >
              <td>{ item.name }</td>
              <td>{item.occupation.join(", ")}</td>
              <td>{ item.birthday}</td>
              <td>{item.status }</td>
            </tr>
          )
         }) : <Spinner/> }
            </tbody>
        </table>
    )
}

export default Table
