import { useCameraList } from "../hook";



const CameraTable = () => {
    const {data, isLoading, error} = useCameraList();
    console.log(data);
    

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>Error: {error.message}</div>;

    return(
        <table className="w-full border-collapse border">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">نام دوربین</th>
                    <th className="border p-2">آدرس IP</th>
                    <th className="border p-2">پورت</th>
                    <th className="border p-2">نام کاربری</th>
                    <th className="border p-2">رمز عبور</th>
                    <th className="border p-2">وضعیت</th>
                    <th className="border p-2">توضیحات</th>
                    <th className="border p-2">عملیات</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((camera) => (
                    <tr key={camera.id} className="hover:bg-gray-50">
                        <td className="border p-2">{camera.name}</td>
                        <td className="border p-2">{camera.ip}</td>
                        <td className="border p-2">{camera.port}</td>
                        <td className="border p-2">{camera.username}</td>
                        <td className="border p-2">{camera.password}</td>
                        <td className="border p-2">{camera.is_active ? "فعال" : "غیرفعال"}</td>
                        <td className="border p-2">{camera.description}</td>
                        <td className="border p-2">
                            <button className="text-blue-500 hover:text-blue-700 ml-2">ویرایش</button>
                            <button className="text-red-500 hover:text-red-700">حذف</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CameraTable;
