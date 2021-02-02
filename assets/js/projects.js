//VOU DEIXAR COMO EXEMPLO PARA CRIAR OUTRA DEPOIS




$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/meconta.JPG',
            link: 'https://meconta.vercel.app',
            title: 'MeConta',
            demo: 'meconta.vercel.app',
            technologies: ['Next.Js', 'Vercel', 'React'],
            description: "Trata-se de um pequeno sistema que captura a opnião do cliente e ao final lhe dar um desconto gerando um cupom.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/appescolas.JPG',
            link: 'https://github.com/DiksonRodrigues/AppEscolas',
            title: 'AppEscolas',
            demo: '',
            technologies: ['React-Native', 'FireBase', 'API-YouTube', 'Rubi', 'Java'],
            description: "Aplicativo estava sendo criado no periodo de pandemia, para auxiliar as escolas. Podendo ministrar aulas online ! ",
            categories: ['featured', 'native']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}