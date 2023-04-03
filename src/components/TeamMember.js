import team_01 from '../Images/team_01.jpg';
import team_02 from '../Images/team_02.jpg';
import team_03 from '../Images/team_03.jpg';
import team_04 from '../Images/team_04.jpg';
import team_05 from '../Images/team_05.jpg';
import team_06 from '../Images/team_06.jpg';
import { useState, useEffect } from 'react';


function TeamMember(){
    const [members, setMembers] = useState([])
    const teams =[
        {
            img: team_01,
            title: 'Johnny',
            post: 'Co-Founder'
        },
        {
            img: team_02,
            title: 'Karry',
            post: 'Product Expert'
        },
        {
            img: team_03,
            title: 'Michael',
            post: 'Chief Marketing'
        },
        {
            img: team_04,
            title: 'Marry',
            post: 'Product Specialist'
        },
        {
            img: team_05,
            title: 'George',
            post: 'Product Photographer'
        },
        {
            img: team_06,
            title: 'Kate',
            post: 'General Manager'
        }

    ]
    useEffect(() => {
        teamMember()
    },[])

    async function teamMember(){
        fetch('https://randomuser.me/api/?results=10', {
            method: 'GET'
        }).then(response => response.json())
            .then(response => setMembers(response.results))
            .catch(err => console.error(err));
    }

    const team02 = members.map((item, i) => {
        return <div className="card mx-3 my-2" key={i} style={{width: '29rem'}}>
        <img src={item.picture.large} className="card-img-top" style={{height: '15rem', objectFit: 'contain'}} alt='product'/>
        <div className="card-body text-center">
            <h5 className="card-title img-title">{item.name.title} {item.name.first} {item.name.last}</h5>
            <p className="card-text img-price">{item.email}</p>
        </div>
    </div>
    })

    const team = teams.map((item, i) => {
        return <div className="card mx-3 my-2" key={i} style={{width: '29rem'}}>
        <img src={item.img} className="card-img-top" alt='product'/>
        <div className="card-body text-center">
            <h5 className="card-title img-title">{item.title}</h5>
            <p className="card-text img-price">{item.post}</p>
        </div>
    </div>
    })
    return(
        <div className='items'>
            {team02.length < 0 ? team : team02}
        </div>
    );
}


export default TeamMember;