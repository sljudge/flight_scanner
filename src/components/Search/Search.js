import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import { submitSearch } from '../../actions/search'

const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '350px',
        backgroundImage: 'url("./img/lake_1920x512.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        color: 'whitesmoke',
    },
    header: {
        marginTop: '0',
        letterSpacing: '1rem',
        fontSize: '2.5rem',
        fontWeight: '1000'
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: '1rem 2rem 1rem 2rem',
        backgroundColor: 'rgba(0,0,0,0.3)',
        fontSize: '1.25rem'
    },
    inputs: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
        backgroundColor: 'rgba(256,256,256, 0.3)',
    },
    section: {
        display: "flex"
    },
    searchBtn: {
        padding: '1rem 2rem 1rem 2rem',
        backgroundColor: 'rgba(58,174,89,0.5)',
        borderRadius: '3px',
        ':hover': {
            backgroundColor: 'rgba(58,174,89,1)',
            fontWeight: '700',
        }
    },
    icon: {
        display: 'flex',
        alignItems: "flex-end",
        fontSize: '1.5rem',
        marginRight: '0.5rem'
    },

})

const Search = props => {
    const { submitSearch } = { ...props }
    return (
        <div className={css(styles.searchContainer)}>
            <div className={css(styles.searchBar)}>
                <div className={css(styles.inputs)}>
                    <div className={css(styles.section)}>
                        <div className={css(styles.icon)}><i className="fas fa-plane-departure"></i></div>
                        <div>From:
                            <div><input></input></div>
                        </div>
                    </div>
                    <div className={css(styles.section)}>
                        <div className={css(styles.icon)}><i className="fas fa-plane-arrival"></i></div>
                        <div>To:
                            <div><input></input></div>
                        </div>
                    </div>
                    <div className={css(styles.section)}>
                        <div className={css(styles.icon)}><i className="fas fa-calendar-alt"></i></div>
                        <div>Depart:
                            <div><input type='date' /></div>
                        </div>
                    </div>
                    <div className={css(styles.section)}>
                        <div className={css(styles.icon)}><i className="fas fa-calendar-alt"></i></div>
                        <div>Return:
                            <div><input type='date' /></div>
                        </div>
                    </div>

                    <div className={css(styles.searchBtn)} onClick={submitSearch}>
                        Search
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}
const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        submitSearch
    }, dispatch)
}
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return { ...propsFromState, ...propsFromDispatch, ...ownProps }
}

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Search)