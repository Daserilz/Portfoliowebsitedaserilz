import { Code, Box, Gamepad2, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {Assets} from '../images';

export function About() {
  const skills = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Game Development',
      description: 'พัฒนาเกมด้วย Unity Engine '
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: '3D Modeling and Rigging',
      description: 'ออกแบบและสร้างโมเดล 3D ด้วย Maya'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'C# Scripting',
      description: 'สามารถเขียน C# และ Unity API'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'อื่นๆ',
      description: 'มี skill อย่างอื่น เช่น AR Filter'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-16 text-gray-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Assets
                src= {Assets.Me}
                alt="Workspace"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl mb-4 text-gray-800">
                Game Developer 
              </h3>
              <p className="text-gray-600 mb-4">
                สวัสดีครับ! ผม Daserilz เป็น Game Devoloper มือใหม่ ที่กำลังสนใจการออกแบบและสร้างสรรค์
                เกมที่น่าสนใจและสนุก โดยในหน้า Page นี้เป็นที่เก็บผลงานของผมที่เคยทำมา
              </p>
              <p className="text-gray-600 mb-4">
                ซึ่งตอนนี้หลักๆจะมีผลงานด้าน Unity Engine , C# Unity , 3D modeling
                และ การ Rigging กับ Animate โดยอนาคตอาจจะเพิ่มสกิลอื่นๆด้วย
              </p>
              <p className="text-gray-600">
                เป้าหมายของผมคือการสร้างเกมที่ไม่เพียงแค่สนุก แต่ยังมีคุณค่าและสร้างแรงบันดาลใจให้กับผู้เล่น รวมถึงทิ้งตัวตนของผมไว้ในแวดวงนี้ด้วย
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-xl mb-2 text-gray-800">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
