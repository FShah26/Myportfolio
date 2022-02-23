import '../css/App.css';
import React  from 'react';
import {Row} from 'react-bootstrap';
import CertificateCard from './CertificateCard';
import {certificates} from '../data/Data';

export default function CertificateConsume(){
    const certificatesData=[];
    for(var i=0;i<certificates.length;i+=3)
    {
        certificatesData.push(
            <Row key={i}>
            {
                certificates.slice(i,i+3).map(({title,issue,organization,organization_link,certificate_link,image,description})=>(
                        <CertificateCard key={title} title={title} issue={issue} organization={organization} organization_link={organization_link} 
                        certificate_link={certificate_link} image={image}
                        description={description}/>
                        ))                
            }
            </Row>
        )
    }
    
    return (
        <>
          {certificatesData}
        </>
      );
}
