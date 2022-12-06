import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { setLogout, searchByName, setFriends, setAllUsers } from '../store/index';


const Friends = () => {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    const allUser = useSelector((state) => state.allUsers || [])
    const token = useSelector((state) => state.token)



    const getUsers = async () => {
        const response = await fetch(process.env.REACT_APP_BASE_URL + 'users', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        const fetchedResponse = await response.json();

        dispatch(setAllUsers({
            allUsers: fetchedResponse,
        }))

    }
    useEffect(() => {
        getUsers()
    }, [])



    const handleSearch = (e) => {
        let userF = user?.friends?.formattedFriends?.filter(u => {
            return u?.fullName.toLowerCase()?.includes(e.target.value.toLowerCase())
        }) || user?.friends?.filter(u => {
            return u?.fullName.toLowerCase()?.includes(e.target.value.toLowerCase())
        })


        // dispatch(setFriends({ friends: userF }))
        console.log('userF', userF)

        console.log('USER friends', user.friends)
        console.log('FORMATTED', user.friends.formattedFriends)

    }



    return (
        <div className='friends-container hidden lg:block '>
            {/* <div className='search-friends'>
                <input type="text" name=""
                    id="searchP" autoFocus
                    className='search-friend-input'
                    placeholder="Search Friends..."

                    onChange={handleSearch}
                />
            </div> */}



            {
                user.role === 'admin' ?
                    <>
                        <h3 className='font-lg text-bold mb-2'>Breedss Users</h3>

                        <div className="friends-box h-[250px] overflow-y-scroll">

                            {allUser?.map((users, i) => {
                                if (users.role.includes('member')) {
                                    return (

                                        <Link to={'/friend/' + users?._id}>

                                            <div key={i} className="friends-div">
                                                <div className="image-box overflow-hidden flex justify-center items-center ">
                                                    <img className=' ' src={`${process.env.REACT_APP_IMG_URL}assets/${users.picturePath}`} alt="" />
                                                </div>

                                                <div className="friend-info">
                                                    <h3 className='text-[14px] truncate font-semibold'>{users?.fullName}</h3>
                                                    <p className='text-[10px] truncate'>{users?.bio}</p>
                                                </div>
                                            </div>
                                        </Link>


                                    )
                                }

                            })

                            }
                        </div>
                    </> :
                    <>
                        <h3 className='font-lg text-bold mb-2'>Friends List</h3>

                        {user?.friends?.formattedFriends ?
                            <div className="friends-box overflow-y-scroll h-[270px]">

                                {user?.friends?.formattedFriends.map((friend, i) => {
                                    return (

                                        <Link to={'/friend/' + friend?._id}>
                                            <div key={i} className="friends-div">
                                                <div className="image-box overflow-hidden flex justify-center items-center ">
                                                    <img className=' ' src={`${process.env.REACT_APP_IMG_URL}assets/${friend.picturePath}`} alt="" />
                                                </div>

                                                <div className="friend-info">
                                                    <h3 className='text-[14px] font-semibold'>{friend?.fullName}</h3>
                                                    <p className='text-[10px]'>{friend?.bio}</p>
                                                </div>
                                            </div>

                                            
                                        </Link>


                                    )
                                })

                                }
                            </div> :

                            <div className="friends-box">

                                {user?.friends?.map((friend, i) => {
                                    return (

                                        <Link to={'/friend/' + friend?._id}>
                                            <div key={i} className="friends-div">
                                                <div className="image-box overflow-hidden flex justify-center items-center ">
                                                    <img className=' ' src={`${process.env.REACT_APP_IMG_URL}assets/${friend.picturePath}`} alt="" />
                                                </div>

                                                <div className="friend-info">
                                                    <h3 className='text-[14px] font-semibold'>{friend?.fullName}</h3>
                                                    <p className='text-[10px]'>{friend?.bio}</p>
                                                </div>
                                            </div>
                                        </Link>


                                    )
                                })

                                }
                            </div>
                        }
                    </>
            }




        </div>
    )
}

export default Friends