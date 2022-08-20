import React from "react";
import { useTable } from 'react-table'


const Table = ({
    data,
    columns,
    totalData,
    totalPage,
    currentPage,
    onNext = () => { },
    onPrev = () => { },
    onClickPage = () => { }
}) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    const pageNumbers = (totalPage, current) => {
        var shownPages = 3;
        var result = [];
        if (current > totalPage - shownPages) {
            result.push(totalPage - 2, totalPage - 1, totalPage);
        } else {
            result.push(current, current + 1, current + 2, '...', totalPage);
        }
        console.log("yuhuuuu", result)
        return result;
    }

    return (
        <>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className="py-3 px-6"
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                className="py-4 px-6"
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <nav className="flex justify-between items-center pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalData}</span></span>
                    <ul className="inline-flex items-center -space-x-px">
                        <div onClick={() => onPrev()} className={currentPage === 1 ? "hidden" : "cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>
                            <span className="sr-only">Previous</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </div>

                        {
                            pageNumbers(totalPage, currentPage).map((item, index) => (
                                <div onClick={() => onClickPage(item)} key={index} href="#" className={item === currentPage ? "cursor-pointer z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>
                                    {item}
                                </div>
                            ))
                        }

                        <div onClick={() => onNext()} className={currentPage === totalPage ? 'hidden' : '' + "cursor-pointer block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>
                            <span className="sr-only">Next</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Table;