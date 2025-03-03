import React from 'react';
import styles from './admin-info.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../../redux/features/usersReducer';

const AdminInfo = (props) => {

  const dispatch = useDispatch()

  const handleUsers = () => {
    dispatch(getUsers())
    props.setRender('admin-users')
  }

  return (
    <div>
      <div className={ styles.back }><Link to='/'>НА ГЛАВНУЮ</Link></div>
      <div className={ styles.admin_wrapper_profile }>
        <img className={ styles.admin_profile_img} src="https://shop.opencart-russia.ru/image/data/members/series9/content-ui-img-icons-png-cs-768x768.png" alt="daun"/>
        <div className={ styles.admin_name }> ADMIN ADMIN </div>
      </div>
      <div className={ styles.admin_wrapper_nav}>
        <ul className={ styles.admin_nav }>
          <li><NavLink to='/admin'>ИНФОРМАЦИЯ О САЙТЕ</NavLink></li>
          <li><Link to='/admin/adminUsers'>СПИСОК ПОЛЬЗОВАТЕЛЕЙ</Link></li>
          <li><Link to='/admin/adminTours'>СПИСОК ТУРОВ</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminInfo;