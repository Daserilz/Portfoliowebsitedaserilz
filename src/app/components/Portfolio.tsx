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
      tags: ['Maya', '3D Modeling', 'Texture'],
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
      title: 'Environment Design',
      category: '3d',
      description: 'สภาพแวดล้อมแบบ low-poly สำหรับเกม',
      image: 'https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsaW5nJTIwZGVzaWduJTIwc29mdHdhcmV8ZW58MXx8fHwxNzcxMzE3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['3D Modeling', 'Environment', 'Texturing']
    },
    {
      id: 5,
      title: 'AI Behavior System',
      category: 'scripting',
      description: 'ระบบ AI ที่ใช้ behavior tree และ state machine',
      image: 'https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBlbmdpbmUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxMzE3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['C#', 'AI', 'Unity'],
      github: 'https://github.com'
    },
    {
      id: 6,
      title: 'Try Not TO GET EAT!',
      category: 'games',
      description: 'เกมแนว Rogue Like ธีมนักวิจัยปาโพชั่นใส่สิ่งมีชีวิตกลายพันธุ์',
      image: 'https://images.unsplash.com/photo-1723032321111-7ea8b009f7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NzEzMTc5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Unity', 'Game Project ' ,'PC Game', '3D'],
      demo: 'https://drive.google.com/file/d/1fCOvQ1X7BF5BgD2-0zN6aiWwuAOeiAqr/view?usp=drive_link'
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
