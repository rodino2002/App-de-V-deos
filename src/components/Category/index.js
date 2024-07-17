import { Children } from "react"
import styles from "./Category.module.css"

function Category({ category, children}){
    return(
      <section className={styles.category}>
          <h1>{category}</h1>
          <div>
            {children}
          </div>
      </section>
    )
}
export default Category