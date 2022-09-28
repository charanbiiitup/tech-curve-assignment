import React, { useState } from 'react';
import styles from './ProfileHeader.module.scss'

const ProfileHeader = ({ onTabChange, currentStep }) => {
    const links = [
        {
            id: 1,
            name: 'Basic Information',
        },
        {
            id: 2,
            name: 'Profile Information'
        },
        {
            id: 3,
            name: 'Contact Information'
        },
        {
            id: 4,
            name: 'Support Details'
        },
        {
            id: 5,
            name: 'Company Account Details'
        }
    ]

    const handleTabClick = (id) => {
        onTabChange(id - 1);
    }

    return (
        <div className={`${styles.profileHeader}`}>
            {links?.map((link, linkIndex) => (
                <div className={styles.link} key={linkIndex} onClick={handleTabClick.bind(this, link.id)}>
                    <span className={styles.linkNumber}>{link.id}</span>
                    <span className={`${styles.linkName} ${(currentStep + 1) === link.id ? styles.active : ''}`}>{link.name}</span>
                </div>
            ))}
        </div>
    );
}

export default ProfileHeader;
