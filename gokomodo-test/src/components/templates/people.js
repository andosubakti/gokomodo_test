import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPeopleService } from "../../redux/services/peopleService";
import Table from "../atoms/table";

const People = () => {
    const { data } = useSelector((state) => state.people)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const params = {
        page: page,
        limit: 10,
    }
    useEffect(() => {
        dispatch(getPeopleService(params))
    }, [page])

    useEffect(() => {
        console.log("yuhu", data.results)
    }, [data])

    const dataTable = React.useMemo(
        () => data?.results,
        [data]
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
            {
                Header: 'Height (cm)',
                accessor: 'height',
            },
            {
                Header: 'Weight (kg)',
                accessor: 'mass',
            },
            {
                Header: 'Skin',
                accessor: 'skin_color',
            },
            {
                Header: 'Hair Color',
                accessor: 'hair_color',
            },
            {
                Header: 'Eye Color',
                accessor: 'eye_color',
            },
        ],
        []
    )

    const totalPage = () => {
        if (data) {
            const totalData = data?.count;
            const limit = 10;
            return Math.ceil(totalData / limit);
        }
    }

    const onNextHandler = () => {
        if (page < totalPage()) {
            setPage(page + 1)
        } else return false
    }

    const onPrevHandler = () => {
        if (page > 1) {
            setPage(page - 1)
        } else return false
    }

    const goToPageHandler = (target) => {
        if (target > 0 && target <= totalPage()) {
            setPage(target)
        } else return false
    }

    return (
        <>
            {
                dataTable && columns ? (
                    <Table
                        data={dataTable}
                        columns={columns}
                        totalData={data?.count}
                        totalPage={totalPage()}
                        currentPage={page}
                        onNext={() => onNextHandler()}
                        onPrev={() => onPrevHandler()}
                        onClickPage={(page) => goToPageHandler(page)}
                    />
                ) : ''
            }
        </>
    );
}

export default People;