import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {Assets} from '../images';

type Category = 'all' | '3d' | 'scripting' | 'games' | 'ofter' ;

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Isometric Sci-fi Weapon Room',
      category: '3d',
      description: 'โมเดลห้องแบบ Isometric พร้อม Texture',
      image: Assets.UE_SciFiWeaponShop,
      tags: ['Maya', '3D Modeling', 'Texturing'],
      demo: 'https://skfb.ly/pHnwE'
    },
    {
      id: 2,
      title: 'AI vs Alien (GDD)',
      category: 'scripting',
      description: 'เอกสารของเกม AI vs Alien โปรเจคในช่วงปีสอง',
      image: Assets.AiVSAlien,
      tags: [ 'GDD', 'Game Design' , ],
      demo: 'https://docs.google.com/document/d/15FYmVBnRDuLkaYbSY-RD3MhFa0jvRcfax7Wq2S_rGrk/edit?usp=sharing'
    },
    {
      id: 3,
      title: 'Prasath Daek',
      category: 'games',
      description: 'เกมผจญภัยสยองขวัญ ที่ลองลง Game jam เป็นครั้งแรก',
      image: Assets.g,
      tags: ['Unity', 'Game Project'],
      demo: 'https://drive.google.com/file/d/1Qpi7jOMx47dp6F3_wEZ8uDQy0dH8r1BX/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Demon God Animate ',
      category: '3d',
      description: 'show animate model in Unity ',
      image: Assets.DemonAnim,
      tags: ['3D Animate', 'Rigging ' ,'Texturing' , ],
      demo : 'https://youtu.be/n_VARHtAxig'
    },
    {
      id: 5,
      title: 'AI vs Alien',
      category: 'games',
      description: 'เกมแนว Shooting FPS ที่ผู้เล่นรับบทเป็น Ai คอยสู้กับเอเลี่ยน ',
      image: Assets.AivsAlienGame,
      tags: ['Unity', 'Game Project' , '3D'],
      demo: 'https://www.youtube.com/watch?v=rw1f3DggoSY'
    },
    {
      id: 6,
      title: 'Try Not TO GET EAT!',
      category: 'games',
      description: 'เกมแนว Rogue Like ธีมนักวิจัยปาโพชั่นใส่สิ่งมีชีวิตกลายพันธุ์',
      image: Assets.TryNot,
      tags: ['Unity', 'Game Project ' ,'PC Game', '3D'],
      demo: 'https://drive.google.com/file/d/1fCOvQ1X7BF5BgD2-0zN6aiWwuAOeiAqr/view?usp=drive_link'
    },
    {
      id: 7,
      title: 'Kaika Jouney',
      category: 'games',
      description: 'เกมแนว RPG เก็บเลเวล ลงดันเจี้ยน',
      image: Assets.kaika,
      tags: ['Unity', 'Game Project ' ,'PC Game', '3D'],
      demo: 'https://youtu.be/X_-2huR85hg'
    },
    {
      id: 8,
      title: 'Kaika Jouney System Diagram',
      category: 'scripting',
      description: 'System Diagram ของ Kaika',
      image: Assets.kaika,
      tags: ['PC Game', 'System','Diagram'],
      demo: 'https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=347%20Final%20Project&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1bK2e883pMuot7DlbQ_yE_aiwiKMQcxiP%26export%3Ddownload'
    }, 
    { 
      id: 9,
      title: 'Pumpkin Rush Hotel',
      category: 'games',
      description: 'เกมแนวจัดการเวลา (Time Management) ที่ให้สวมบทเป็นพนักงานโรงแรมหัวฟักทอง คอยดูแลแขกที่เข้าพัก',
      image: Assets.pumk,
      tags: ['Unity', 'Game Project ' , '2D'],
      demo: 'https://loki33haha.itch.io/pumkin'
    },
    { 
      id: 10,
      title: 'Feature in Pumpkin Rush Hotel ',
      category: 'scripting',
      description: 'ระบบต่างๆที่ได้ทำในเกม Pumpkin Rush Hotel อย่างเช่น Service loop , Sound settings , etc. ',
      image: Assets.pumkmenu,
      tags: ['Unity', 'System','Diagram'],
      demo: 'https://canva.link/2l60xg7jh8nt170'
    }
  ];

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
     { id: 'games', label: 'Game Project' },
    { id: '3d', label: '3D Design and Animate' },
    { id: 'scripting', label: 'Game Design and System' },
    { id: 'ofter', label: 'อื่นๆ' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-4 text-gray-800">
            ผลงานของฉัน
          </h2>
          <p className="text-center text-gray-600 mb-12">
            รวมผลงานด้านต่างๆ ที่ผมได้พัฒนาและสร้างสรรค์
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative overflow-hidden h-64">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        >
                          <Github size={20} className="text-gray-800" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        >
                          <ExternalLink size={20} className="text-gray-800" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
