import { Code, Box, Gamepad2, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const skills = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Game Development',
      description: 'พัฒนาเกมด้วย Unity Engine มากกว่า 5 ปี'
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: '3D Modeling',
      description: 'ออกแบบและสร้างโมเดล 3D ด้วย Blender และ Maya'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'C# Scripting',
      description: 'เชี่ยวชาญ C# และ Unity API'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'VFX & Shaders',
      description: 'สร้าง Visual Effects และ Custom Shaders'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-16 text-gray-800">
            เกี่ยวกับฉัน
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723032321111-7ea8b009f7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NzEzMTc5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl mb-4 text-gray-800">
                Unity Game Developer & 3D Artist
              </h3>
              <p className="text-gray-600 mb-4">
                สวัสดีครับ! ผมเป็นนักพัฒนาเกมที่มีความหลงใหลในการสร้างประสบการณ์เกมที่น่าตื่นเตั้น 
                ด้วยประสบการณ์กว่า 5 ปีในการใช้ Unity Engine ผมได้พัฒนาเกมหลากหลายแนว 
                ตั้งแต่เกมมือถือไปจนถึงเกม PC
              </p>
              <p className="text-gray-600 mb-4">
                นอกจากการเขียนโค้ดแล้ว ผมยังมีความเชี่ยวชาญในด้านการออกแบบ 3D modeling 
                และการสร้าง visual effects ที่ช่วยให้เกมมีความสมบูรณ์และน่าสนใจมากยิ่งขึ้น
              </p>
              <p className="text-gray-600">
                เป้าหมายของผมคือการสร้างเกมที่ไม่เพียงแค่สนุก แต่ยังมีคุณค่าและสร้างแรงบันดาลใจให้กับผู้เล่น
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