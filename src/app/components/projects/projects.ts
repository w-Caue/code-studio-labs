import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProjectsComponent {

  @ViewChild('swiper') swiper!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiper.nativeElement;

    swiperEl.initialize();

    const prev = document.querySelector('.custom-prev');
    const next = document.querySelector('.custom-next');

    prev?.addEventListener('click', () => swiperEl.swiper.slidePrev());
    next?.addEventListener('click', () => swiperEl.swiper.slideNext());
  }

  projects: Project[] = [

    // {
    //   title: 'ERP Empresarial',
    //   category: 'Sistema Web',
    //   image: 'assets/projects/erp.png',
    //   description: 'Sistema completo para gestão de clientes, pedidos e produtos.',
    //   technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
    //   github: '#',
    //   demo: '#'
    // },

    // {
    //   title: 'Landing Page Academia',
    //   category: 'Landing Page',
    //   image: 'assets/projects/gym.png',
    //   description: 'Landing page desenvolvida para conversão de clientes.',
    //   technologies: ['Angular', 'Tailwind'],
    //   github: '#',
    //   demo: '#'
    // },

    // {
    //   title: 'Sistema de Agendamentos',
    //   category: 'Sistema Web',
    //   image: 'assets/projects/schedule.png',
    //   description: 'Sistema para gerenciamento de horários e clientes.',
    //   technologies: ['Vue', 'Laravel', 'MySQL'],
    //   github: '#',
    //   demo: '#'
    // },

    {
      title: 'HaShem Artes Marciais',
      category: 'Website',
      image: 'img/projects/logo-hashem.svg',
      description: 'Website moderno com animações e foco em performance.',
      technologies: ['Angular', 'Tailwind'],
      github: 'https://github.com/w-Caue/hashem-site',
      demo: 'https://hashemyhwh.netlify.app'
    }

  ];

}