import React from "react";
import { CardPacksType } from "../../api/cardsPackAPI";

type TablePacksType ={
  packs: CardPacksType[]
}

const headers = ['Name', 'Cards', 'Last Updated', 'Created by', 'Action'];

export const TablePacks = (props: TablePacksType) => {
  const {packs} = props
  return (
    <table>
      <colgroup span={5}></colgroup>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {packs.map((el, index) => (
          <tr key={index}>
            <td>{el.name}</td>
            <td>{el.cardsCount}</td>
            <td>{el.updated}</td>
            <td>{el.user_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};