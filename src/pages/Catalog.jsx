import React, {useState} from 'react';
import MyContext from '../context';
import axios from 'axios';

import { FormStatic, Card, ShowMore } from '../partials'
import {useRouteMatch} from "react-router-dom";




const Catalog = (props) => {
    const [towers, setTowers] = useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => setTowers(data.towers));
    }, []);

    let { url } = useRouteMatch();
    const arr = [
        {
            id: 1,
            name:'Башня 1',
            isOpenMap: false,
            urlId: 1234,
            bcUrl: 'bashnya_1',
        },
        {
            id: 2,
            name:'Башня 2',
            isOpenMap: false,
            urlId: 1334,
            bcUrl: 'bashnya_2',
        },
        {
            id: 3,
            name:'Башня 3',
            isOpenMap: false,
            urlId: 453543,
            bcUrl: 'bashnya_3',
        },
        {
            id: 4,
            name:'Башня 44',
            isOpenMap: false,
            urlId: 45543,
            bcUrl: 'bashnya_44',
        }
       ];
    const [changeStatusOpenMap, setChangeStatusOpenMap] = useState(arr);
    const openMap = (id) => {
        setChangeStatusOpenMap(
            changeStatusOpenMap.map(item => {
                if (item.id === id) {
                    item.isOpenMap = true;
                }
                return item
            })
        );
    };
    const closeMap = (id) => {
        setChangeStatusOpenMap(
            changeStatusOpenMap.map(item => {
                if (item.id === id) {
                    item.isOpenMap = false;
                }
                return item
            })
        );
    };

    return <>
        <section className="catalog section">
            {<MyContext.Provider value={{openMap, closeMap}}>
                {
                    changeStatusOpenMap.map((item, index) => {
                        return <Card
                            key={`${item.name}_${index}`}
                            catalog
                            elem={item}
                            slug={`${url}/${item.urlId}`}
                            id={item.urlId}
                            business_id={'/catalog' + `/bc/${item.bcUrl}`}/>
                    })
                }
            </MyContext.Provider>}

            {
                towers.map((item, index) => {
                    return <Card catalog
                                 business_id={`${url}/bc/${item.bcUrl}`}
                                 elem={item}
                                 slug={`${url}/${item.urlId}`}
                                 id={item.urlId}
                                 key={item.id}/>
                })
            }
            <ShowMore/>

        </section>
        <FormStatic/>
    </>
};


export default Catalog;
