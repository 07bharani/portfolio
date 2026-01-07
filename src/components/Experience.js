import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Aideah Data Works (Previously Eparampara Technologies)',
            role: 'Full Stack Developer',
            period: 'July 2024 - Present',
            description: [
                'Working on MERN Stack applications with React.js, Node.js, Express.js, and MongoDB.',
                'Developing responsive UI, API integrations, and CRUD functionalities.',
                'Deploying and managing applications in AWS environment.'
            ]
        },
        {
            company: 'Intern Academy of skill development',
            role: 'MERN Stack Intern',
            period: 'Sep 2022 - Oct 2022',
            description: [
                'Built and deployed multiple full-stack applications using React.js, Node.js, MongoDB, and Express.js.',
                'Created responsive UI with React and managed state effectively using hooks.',
                'Integrated REST APIs and performed CRUD operations with backend and MongoDB.'
            ]
        }
    ];

    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <h2 className="section-title" style={{
                    fontSize: '2.5rem',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}>
                    My <span style={{ color: 'var(--accent-color)' }}>Experience</span>
                </h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '30px',
                            marginBottom: '30px',
                            borderLeft: '4px solid var(--accent-color)',
                            position: 'relative'
                        }}>
                            <span style={{
                                position: 'absolute',
                                top: '-15px',
                                right: '30px',
                                backgroundColor: 'var(--accent-color)',
                                color: '#fff',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '600'
                            }}>
                                {exp.period}
                            </span>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{exp.role}</h3>
                            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                {exp.company}
                            </h4>

                            <ul style={{ paddingLeft: '20px' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{
                                        marginBottom: '10px',
                                        listStyleType: 'disc',
                                        color: '#ccc'
                                    }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
