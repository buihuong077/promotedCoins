import { useNavigate } from "react-router-dom";

const ItemTable = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  const handleClickUser = () => {
    navigate("/user"); // Điều hướng về trang chủ "/"
  };

  return (
    <tbody className="w-full" onClick={() => handleClickUser("/user")}>
      <tr>
        <th scope="row">
          <span>
            <i className="fa-regular fa-star"></i>
          </span>
        </th>
        <td>45</td>
        <td>
          <div className="flex gap-2">
            <img
              className="w-[36px] h-[36px]"
              src="https://coinmun.com/_next/image?url=https%3A%2F%2Fcdn.coinmun.com%2Fimages%2Fmochi.png&w=96&q=75"
              alt=""
            />

            <div className="flex flex-col">
              <span>MOCHI</span>
              <span className="text-sm">Mochi</span>
            </div>
          </div>
        </td>
        <td className=" text-center">
          <span>
            <i className="fa-solid fa-circle-user"></i>
          </span>
        </td>
        <td>
          <span>123</span>
        </td>
        <td>
          <span>123</span>
        </td>
        <td>
          <span>123</span>
        </td>
        <td>
          <span>123</span>
        </td>
        <td>
          <span>123</span>
        </td>
        <td>
          <span>123</span>
        </td>
        <td>
          <span>123</span>
        </td>
        <td>
          <span>123</span>
        </td>
        <td>
          <span>123</span>
        </td>
      </tr>
    </tbody>
  );
};

export default ItemTable;
