import React, { useState } from 'react'

import styles from './SideCard.module.scss';

const SideCard = () => {
    const [quickList, setList] = useState(
        [
            {
                id: 1,
                name: "Upload a good quality profile picture",
            },
            {
                id: 2,
                name: "Add relevent category tags",
            },
            {
                id: 3,
                name: "A short description about your company",
            },
            {
                id: 4,
                name: "Add your company details",
            },
            {
                id: 5,
                name: "Add company social links"
            }
        ]
    )
    return (
        <>
            <div className='card'>
                <div className={styles.quickGuide}>
                    <img className={styles.quickGuideImg} src="/problem-solving.svg" alt="Light" />
                    <h3>Quick Guide</h3>
                </div>
                <ul className={styles.quickList}>
                    {quickList.map((li, index) => {
                        return <li key={index}>{li.name}</li>
                    })}
                </ul>
            </div>
            <div className='content'>
                <p className='paragraph'>Finding it difficult to create your profile?</p>
                <h5 className='ex-pro'>See Example Profile</h5>
            </div>

        </>

    )
}

export default SideCard;