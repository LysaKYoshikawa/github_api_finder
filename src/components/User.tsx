import React from 'react'
import { UserProps } from '../types/user';
import { MdLocationPin, MdRocket } from "react-icons/md";
import {Link} from 'react-router-dom';
import classes from "./User.module.css";

export const User = ({
    location, login, avatar_url, followers, following, bio,}: UserProps) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login}/>
        <h2>{login}</h2>
        {location &&(
            <p className={classes.location}>
                <MdLocationPin/>
                <span>{location}</span>
            </p>
        )}
        {bio &&(
            <p className={classes.bio}>
                <MdRocket/>
                <span>{bio}</span>
            </p>
        )}
        
        <div className={classes.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={classes.number}>{followers}</p>
            </div>
            <div>
                <p>Seguindo:</p>
                <p className={classes.number}>{following}</p>
            </div>

        </div>
        <Link target="_blank" to={`https://github.com/${login}`}>Entrar no perfil do github</Link>


    </div>
  );
};
