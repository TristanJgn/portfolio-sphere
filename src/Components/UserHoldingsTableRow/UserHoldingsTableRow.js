import { useState } from "react";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./UserHoldingsTableRow.scss";


function UserHoldingsTableRow({ coin }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const onCloseEdit = () => setShowEdit(false);
  const onCloseDelete = () => setShowDelete(false);

  return (
    <tr className="user-holdings-table__body-row">
      <td className="user-holdings-table__body-column">
        <div className="user-holdings-table__body-column-coin">
          <p className="user-holdings-table__body-column-coin__name">
            {coin.coin_name}
          </p>
          <p className="user-holdings-table__body-column-coin__symbol">
            {coin.coin_symbol}
          </p>
        </div>
      </td>
      <td className="user-holdings-table__body-column">
        {/* Multiplying by 1 removes any trailing zeros */}
        {coin.coin_amount * 1}
      </td>
      <td className="user-holdings-table__body-column">
        <div className="user-holdings-table__body-column-actions">
          <img
            className="user-holdings-table__body-column-actions__edit"
            src={editIcon}
            alt="edit icon"
            onClick={() => setShowEdit(true)}
          />
          <EditModal
            onClose={onCloseEdit}
            show={showEdit}
            setShow={setShowEdit}
            coin={coin}
          />
          <img
            className="user-holdings-table__body-column-actions__delete"
            src={deleteIcon}
            alt="delete icon"
            onClick={() => setShowDelete(true)}
          />
          <DeleteModal onClose={onCloseDelete} show={showDelete} coin={coin} />
        </div>
      </td>
    </tr>
  );
}

export default UserHoldingsTableRow;
