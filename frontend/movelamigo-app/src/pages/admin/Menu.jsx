
export default function Menu() {
    const logout = async() => {
        await fetch('https://localhost:5001/api/user/logout',{
            method: 'POST',
            headers:{'Contet-Type':'applciation/json'},
            credentials: 'include'
        });
    }
    return (
            <section className='sectionAdmin'>
                <div className='container'>
                    <div className='col-12 d-flex justify-content-between'>
                            <a href='/' className='mt-4 menuitemsAdmin'>WEBSITE</a>
                            <h3 className='mt-4 logoAdmin'>MÓVEL AMIGO</h3>
                            <a href='/' className='mt-4 menuitemsAdmin' onClick={() => logout()}>Logout</a>
                    </div>
                </div>
            </section>
    )
}
