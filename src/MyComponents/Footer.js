import React from 'react'

export const Footer = () => { 
    let myFooterStyle={
        margin:"250px 0 0 0"  ,
        left:0,
        bottom:0,
        right:0,
    }  
    return (
        
            <footer className="bg-dark text-light py-3" style={myFooterStyle} >
                <p className="text-center">
                    Copyright &copy; ShagunTodoList.com 
                </p>
            </footer>

    )
}
