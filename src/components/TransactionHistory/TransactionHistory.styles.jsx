import styled from 'styled-components'

export const Table = styled.table`
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid rgb(56, 82, 210);
    table-layout: fixed;
    border-collapse: collapse;

    th {
        border: 1px solid white;
        padding-top: 2px;
        padding-bottom: 2px;
    }

    td {
        border: 1px solid rgba(110, 110, 110, 0.703);
        text-align: center;
        padding-top: 2px;
        padding-bottom: 2px;
        text-transform: capitalize;
    }

    tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

tbody tr:nth-child(even) {
  background-color: #d9d9d9;
}
`

export const TableHead = styled.thead`

    background-color: rgba(56, 82, 210, 0.302);

`