import React, {useState} from 'react'
import Itemcard from './Itemcard'
import Navbar from './Navbar'
import data from '../data'

function Home() {

    return (
        <>
            <Navbar />

            <section className="py-4 container">
                <div className="row justify-content-center">
                {data.productData.map((item, index)=>{
                    return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                    )
                })}
                </div>
            </section>
        </>
    )
}

export default Home
