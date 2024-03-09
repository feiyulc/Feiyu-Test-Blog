const getBlogs = async () => {
    // 这里是一个模拟的数据库调用。在实际应用中，你可能需要从数据库中获取所有博客的信息。
    return [{ id: 1, title: 'My first blog', content: 'This is my first blog.' }];
};

const getBlog = async (id) => {
    // 这里是一个模拟的数据库调用。在实际应用中，你可能需要从数据库中获取指定ID的博客的信息。
    return { id: 1, title: 'My first blog', content: 'This is my first blog.' };
};

module.exports = { getBlogs, getBlog };
