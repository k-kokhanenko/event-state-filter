export const ProjectList = (props) => {
  const { projects } = props;

  return (
    <>
      <div className='is-flex-direction-row is-flex-wrap-wrap'>
        {projects.map((project, index) => (
            <img src={ project.img } />
        ))}
      </div>
    </>
  )
}
