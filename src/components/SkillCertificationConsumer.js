import SkillCertificationCard from './SkillCertificationCard';
import {hackerrankSkills} from '../data/Data';

export default function SkillCertificationConsumer(){
    const certifiedSkills = [];
    for(var i=0;i<hackerrankSkills.length;i+=6)
    {
      certifiedSkills.push(
              hackerrankSkills.slice(i,i+6).map(({title,link})=>(
                <SkillCertificationCard key={title} title={title} link={link} className="text-white"/>
            ))
        )
    }

    return(
        <div className="certified-skills-grid">
          {certifiedSkills}
        </div>
    );
}