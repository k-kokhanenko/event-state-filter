import { Toolbar } from "../Toolbar/Toolbar";
import { ProjectList } from "../ProjectList/ProjectList";
import { useState } from "react";

export const Portfolio = (props) => {
    const { projects } = props;
    const categories = ['All', ...new Set(projects.map(project => project.category))];
    
    const [select, setSelect] = useState('All');    
    const [selectedProjects, setSelectProjects] = useState(projects);    

    const handle = (e) => {
        if (e.target.value == 'All') {
            setSelectProjects(projects);
        } else {
            setSelectProjects(projects.filter(project => project.category === e.target.value));
        }
        
        setSelect(e.target.value);
    }

    return (
        <>
            <div className="box">
                <Toolbar 
                    filters = { categories } 
                    selected = { select }
                    onSelectFilter = { handle }
                />
            </div>
            <ProjectList 
                projects = { selectedProjects }
            />
        </>
    )
}
