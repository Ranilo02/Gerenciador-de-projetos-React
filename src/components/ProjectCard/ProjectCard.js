import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

import { BsEye, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({id, name, budget, category, handleRemove}) {

    const confirmRemove = () => {
        const result = window.confirm("Tem certeza que deseja excluir este projeto?");
        if (result) {
            handleRemove(id);
        }
    }

    return (
        <div className={styles.project_card} >
            <h4>{name}</h4>
            <p>
                <span>Orçamento: </span> R${budget}
            </p>
            <p className={styles.category_text} >
                <span className={styles[category.toLowerCase()]} ></span> {category}
            </p>
            <div className={styles.project_card_actions} >
                <Link to={`/project/${id}`}>
                    <BsEye /> Ver
                </Link>
                <button onClick={confirmRemove} >
                    <BsFillTrashFill />Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
