"use client";

import React from "react";
import styles from "./navbar.module.scss";
import RightBar from "./rightBar";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Navbar() {
    return (
        <div >
            <div className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <RightBar />
                    <p className={styles.title}>BookingCare</p>
                </div>
                <div className={styles.navbarCenter}>
                    <div className={styles.items}>
                        <div className={styles.curCenterItem}>
                            <Link href="all">Tất cả</Link>
                        </div>
                        <div>
                            <Link href="all">Tại nhà</Link>
                        </div>
                        <div>
                            <Link href="all">Tại viện</Link>
                        </div>
                        <div>
                            <Link href="all">Sống khỏe</Link>
                        </div>
                    </div>

                    <div className={styles.search}>
                        <Link href="all" className={styles.searchItem}>
                            <CiSearch />
                            Search
                        </Link>
                    </div>
                </div>
                <div className={styles.navbarRight}>
                    <div>
                        <FaHistory className={styles.icon}/>
                        <p>Lich hen</p>
                    </div>
                    <div>
                        <MdOutlineSupportAgent className={styles.icon}/>
                        <p>Ho tro</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
