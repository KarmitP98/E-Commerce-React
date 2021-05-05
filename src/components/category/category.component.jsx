import './category.styles.scss'

import React from 'react'
import { connect } from 'react-redux'

const Category = ({match}) => {
    console.log(match);
    return (
        <div className='cateory'>
            <h2>Category Page</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
