import React, {useState} from "react";
import classes from "./Users.module.css";

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)//количество страниц
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
   let portionCount = Math.ceil(pagesCount / props.portionSize)//количество порций
    let [portionNumber, setPortionNumber] = useState(1)// номер порции
    let leftNumberPortion = (portionNumber - 1) * props.portionSize + 1
    let rightNumberPortion = portionNumber * props.portionSize

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>Back</button>
            }
            {pages.filter(el => el >= leftNumberPortion && el <= rightNumberPortion)
                .map(page => <span className={props.currentPage === page && classes.pagination}
                                   onClick={() => props.onCurrentPage(page)}>{page}</span>)}
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1) }>Next</button>
            }
        </div>
    )
}
export default Pagination