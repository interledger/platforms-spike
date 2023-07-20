import React from "react";
import Link from "next/link";
import styles from "./Specifications.module.css";

export default function Specifications({ link, children }) {
  return (
    <div className={styles.specifications}>
      <table>
        <thead>
          <tr>
            <th>Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link
                href={"/specification#" + link}
                className="external"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
                <br />
                <small>{link && `#${link}`}</small>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
