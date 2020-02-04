import React, { useRef } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import { submitSearch, onInputChange, onListSelect, onDateChange } from '../../actions/search'

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
    dateInput: {
        width: '8.5rem',
        fontSize: '0.75rem'
    },
    textInput: {
        width: '15rem',
        height: '2rem',
        fontWeight: '100',
        backgroundColor: 'rgba(256,256,256,0.9)',
        color: '#1e1e1e',
        letterSpacing: '0.1rem',
    },
    section: {
        display: "flex"
    },
    searchBtn: {
        padding: '1rem 2rem 1rem 2rem',
        backgroundColor: 'rgba(58,174,89,0.5)',
        borderRadius: '3px',
        cursor: 'pointer',
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
    dropDown: {
        position: "absolute",
        width: '15rem',
        padding: '0',
        margin: '0',
        listStyleType: 'none',
        fontSize: '1rem',
        backgroundColor: 'rgba(256,256,256,0.8)',
        color: '#1e1e1e'
    },
    dropDownItem: {
        padding: '0.25rem',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(30,30,30,0.5)',
            color: 'whitesmoke'
        }
    }
})

const Search = props => {
    const { submitSearch, onInputChange, onDateChange, fromList, toList, fromInput, toInput, onListSelect } = { ...props }
    const fromFocus = useRef()
    const toFocus = useRef()
    const listItemFocus = useRef()

    const handleKeyDown = (e) => {
    }

    return (
        <div className={css(styles.searchContainer)}>
            <div className={css(styles.searchBar)}>
                <div className={css(styles.inputs)}>
                    <div className={css(styles.section)}>
                        <div className={css(styles.icon)}><i className="fas fa-plane-departure"></i></div>
                        <div>From:
                            <div>
                                <input className={css(styles.textInput)} onChange={(e) => onInputChange('fromInput', e.target.value)} ref={fromFocus} value={fromInput} onKeyDown={(e) => handleKeyDown(e)} />
                            </div>
                            {fromList.length > 0 && fromFocus.current === document.activeElement &&
                                <ul className={css(styles.dropDown)} >
                                    {fromList.map(item => (
                                        <li ref={listItemFocus} className={css(styles.dropDownItem)} key={item.id} onClick={() => onListSelect(item.name, item.id, 'fromInput')}>
                                            {item.name} ({item.code})
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                    <div className={css(styles.section)}>
                        <div className={css(styles.icon)}><i className="fas fa-plane-arrival"></i></div>
                        <div>To:
                            <div>
                                <input className={css(styles.textInput)} onChange={(e) => onInputChange('toInput', e.target.value)} ref={toFocus} value={toInput} onKeyDown={(e) => handleKeyDown(e)} />
                            </div>
                            {toList.length > 0 && toFocus.current === document.activeElement &&
                                <ul className={css(styles.dropDown)} onKeyPress={(e) => console.log(e.charCode)}>
                                    {toList.map(item => (
                                        <li ref={listItemFocus} className={css(styles.dropDownItem)} key={item.id} onClick={() => onListSelect(item.name, item.id, 'toInput')}>
                                            {item.name} ({item.code})
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                    <div className={css(styles.section)}>
                        <div className={css(styles.icon)}><i className="fas fa-calendar-alt"></i></div>
                        <div>Depart:
                            <div><input className={css(styles.dateInput)} type='date' onChange={(e) => onDateChange('departDate', e.target.value)} /></div>
                        </div>
                    </div>
                    <div className={css(styles.section)}>
                        <div className={css(styles.icon)}><i className="fas fa-calendar-alt"></i></div>
                        <div>Return:
                            <div><input className={css(styles.dateInput)} type='date' onChange={(e) => { console.log('date change'); onDateChange('returnDate', e.target.value) }} /></div>
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
        fromList: state.search.fromList,
        toList: state.search.toList,
        fromInput: state.search.fromInput,
        toInput: state.search.toInput,
    }
}
const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        submitSearch,
        onInputChange,
        onListSelect,
        onDateChange
    }, dispatch)
}
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return { ...propsFromState, ...propsFromDispatch, ...ownProps }
}

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Search)