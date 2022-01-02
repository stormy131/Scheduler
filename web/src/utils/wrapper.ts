async function tryWrapper(func, ...args): Promise<boolean>{
    try{
        await func(...args);
    } catch(e){
        return false;
    }

    return true;
}

export default tryWrapper;