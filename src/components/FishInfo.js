// src/components/FishInfo.js
import React, { useState } from "react";
import "./styles.css"; // Đảm bảo bạn đã import styles.css

const FishInfo = () => {
  // Sử dụng useState để lưu trạng thái của loài cá được chọn
  const [selectedFish, setSelectedFish] = useState(null);

  // Thông tin chi tiết của các loài cá
  const fishData = [
    {
      name: "Cá Mập Trắng",
      image:
        "https://www.shutterstock.com/image-photo/great-white-shark-sharks-one-600nw-2488900949.jpg",
      description: "Một loài cá ăn thịt lớn, mạnh mẽ.",
      detail:
        "Cá mập trắng, hay còn gọi là cá mập trắng lớn (Carcharodon carcharias), là một loài cá mập nổi tiếng và là một trong những loài cá mập lớn nhất trong đại dương. Đây là loài săn mồi đỉnh cao, được biết đến với kích thước ấn tượng và khả năng bơi lội nhanh chóng. Cá mập trắng có thể dài tới 6 mét và nặng đến hơn 1.000 kg. Tuy nhiên, những cá thể phổ biến thường dài từ 3-4 mét. Chúng có thân hình mạnh mẽ, với hàm răng sắc nhọn hình tam giác, giúp chúng dễ dàng cắt qua thịt và xương của con mồi. Cá mập trắng có màu trắng ở phần bụng và màu xám sáng hoặc xanh xám ở phần lưng. Điều này giúp chúng dễ dàng ngụy trang trong môi trường nước khi nhìn từ dưới lên. Chúng là loài ăn thịt, chủ yếu săn các loài động vật biển như cá, hải cẩu, và đôi khi là cá mập nhỏ hơn. Cá mập trắng có thể tấn công mạnh mẽ từ dưới lên, sử dụng sức mạnh và tốc độ để làm cho con mồi bất ngờ. Cá mập trắng sống ở các vùng biển ấm và ôn đới, đặc biệt là ở các khu vực ven bờ, như bờ biển California, Nam Phi, và Úc. Cá mập trắng cũng nổi bật trong văn hóa đại chúng, đặc biệt qua bộ phim nổi tiếng Jaws của Steven Spielberg, góp phần khiến loài cá này trở thành một biểu tượng của sự nguy hiểm trong mắt nhiều người. Tuy nhiên, thực tế cá mập trắng không phải là loài cá mập tấn công con người một cách thường xuyên.",
    },
    {
      name: "Cá Ngừ",
      image:
        "https://cafefcdn.com/203337114487263232/2024/1/8/ca-ngu5-1704685097578940610173-1704688302393-17046883026581610074126.jpg",
      description: "Loài cá nhanh và được ưa chuộng trong ẩm thực.",
      detail:
        "Cá ngừ (tên khoa học: Thunnus) là một loài cá biển thuộc họ Cá vược (Scombridae). Cá ngừ là một trong những loài cá thương phẩm quan trọng nhất trong ngành thủy sản nhờ vào giá trị dinh dưỡng và kinh tế. Các loài cá ngừ thường có tốc độ bơi rất nhanh và khả năng di chuyển vượt xa trong đại dương. Cá ngừ có thân hình thon dài, hình thuôn, giúp chúng bơi rất nhanh và hiệu quả. Chúng có một bộ vây đặc biệt và một đuôi mạnh mẽ giúp chúng có thể di chuyển với tốc độ lên đến 75 km/h. Cá ngừ có kích thước đa dạng tùy theo loài, nhưng một số loài cá ngừ lớn có thể dài đến 3-4 mét và nặng lên đến 500 kg. Loài cá ngừ vây xanh (Bluefin tuna) là một trong những loài lớn nhất. Cá ngừ có màu sắc khác nhau tùy thuộc vào loài, nhưng nhìn chung chúng có màu xanh lam hoặc xanh đen ở lưng, và màu bạc ở bụng, giúp chúng ngụy trang hiệu quả trong môi trường đại dương. Cá ngừ là loài di cư, chúng thường di chuyển qua lại giữa các vùng biển ấm và lạnh để tìm kiếm thức ăn và sinh sản. Cá ngừ là loài ăn thịt, chúng chủ yếu ăn các loài cá nhỏ, động vật giáp xác và mực. Cá ngừ đóng vai trò quan trọng trong ngành công nghiệp thủy sản, đặc biệt là trong ngành chế biến thực phẩm và xuất khẩu, đặc biệt là tại Nhật Bản, Mỹ, và các nước Châu Âu. Cá ngừ vây xanh có giá trị cực kỳ cao, đặc biệt trong các thị trường tiêu thụ sushi.",
    },
    {
      name: "Cá Mặt Trăng",
      image:
        "https://cdn.tgdd.vn/2021/12/CookDish/ca-mat-trang-la-gi-co-an-duoc-khong-noi-song-va-gia-ca-mat-avt-1200x676.jpg",
      description: "Cá sống ở vùng nước sâu và lạnh.",
      detail:
        "Cá mặt trăng (tên khoa học: Mola mola) là một loài cá biển nổi tiếng với hình dáng độc đáo và kích thước lớn. Đây là loài cá thuộc họ Molidae. Chúng có thân hình rất đặc biệt, với một thân dẹt, tròn và một cái đầu lớn. Các vây của cá khá lớn và dẹt, đặc biệt là vây lưng và vây hậu môn, khiến cá trông giống như một chiếc đĩa khổng lồ. Thân cá có thể dài từ 2 đến 3 mét và nặng đến 1.000 kg, với loài cá mặt trăng lớn nhất được ghi nhận có thể nặng tới 2.300 kg. Cá mặt trăng có màu xám bạc, đôi khi có các vết màu vàng, đen hoặc trắng trên cơ thể. Mặc dù có vẻ ngoài to lớn và cồng kềnh, cá mặt trăng lại bơi rất nhanh khi cần thiết. Cá mặt trăng là một trong những loài cá biển lớn nhất, mặc dù chúng không có đuôi thật sự. Thay vào đó, cá có một phần đuôi hình tròn, giống như một cái vây đuôi bị rút ngắn. Một số cá thể có thể dài đến 3 mét và nặng hơn 1.000 kg. Cá mặt trăng sống ở các vùng biển nhiệt đới và ôn đới, chủ yếu ở các đại dương như Thái Bình Dương, Đại Tây Dương và Ấn Độ Dương. Mặc dù chúng có thể sống ở độ sâu lên đến 200 m, cá mặt trăng thường di chuyển gần mặt nước, nơi chúng có thể dễ dàng tiếp cận với ánh sáng mặt trời. Cá mặt trăng là loài ăn thực vật và động vật, chủ yếu là các loài sinh vật biển như sứa, tảo biển, mực và các sinh vật phù du. Những con cá này có thể ăn một lượng thức ăn khổng lồ để đáp ứng với nhu cầu năng lượng của chúng. Cá mặt trăng sống đơn độc hoặc theo cặp. Chúng được biết đến với thói quen 'tắm nắng' khi thường nổi lên mặt nước, quay mặt về phía mặt trời. Điều này có thể giúp chúng xua đuổi ký sinh trùng hoặc giúp điều chỉnh nhiệt độ cơ thể. Cá mặt trăng nổi tiếng là một loài cá hiền lành, thường không gây nguy hiểm cho con người. Chúng có thể được thấy gần các bãi biển và thỉnh thoảng trở thành đối tượng của các chuyến đi lặn biển, thu hút sự chú ý của các thợ lặn và nhiếp ảnh gia biển.",
    },
    {
      name: "Cá Voi Sát Thủ",
      image:
        "https://kenh14cdn.com/203336854389633024/2024/7/25/ca-voi-4-1721876415410471714399-1721896437653-17218964380031469355720.jpg",
      description: "",
      detail:
        "Cá voi sát thủ (tên khoa học: Orcinus orca) là một loài cá voi lớn thuộc họ Delphinidae (họ cá heo), và là loài động vật ăn thịt mạnh mẽ và thông minh nhất trong đại dương. Cá voi sát thủ còn được gọi là orcas, và chúng nổi bật không chỉ vì khả năng săn mồi ấn tượng mà còn vì trí tuệ vượt trội và cấu trúc xã hội phức tạp. Cá voi sát thủ là một trong những loài cá voi lớn nhất. Chúng có thể dài từ 5 đến 9 mét, và cân nặng có thể lên đến 5.600 kg. Cá voi sát thủ cái thường nhỏ hơn so với con đực. Cá voi sát thủ có bộ lông màu đen đặc trưng với các mảng màu trắng ở bụng, dưới mắt và gần vây lưng. Các vây lưng của cá voi sát thủ có hình tam giác đặc trưng, rất lớn đối với cá voi đực, và nhỏ hơn đối với cá voi cái. Cá voi sát thủ có cơ thể dẻo dai, với đầu tròn, vây lưng cao và mạnh mẽ. Vây lưng của cá voi sát thủ đực có thể dài lên đến 1,8 mét. Cá voi sát thủ là loài ăn thịt, chúng có thể săn bắt nhiều loại con mồi khác nhau như cá, mực, hải cẩu, thậm chí là cá voi lớn, bao gồm cả cá voi lưng gù và cá voi xanh. Cá voi sát thủ sử dụng các chiến thuật săn mồi rất thông minh và tổ chức, thường phối hợp trong nhóm để săn mồi hiệu quả. Cá voi sát thủ được biết đến với khả năng phối hợp và giao tiếp rất cao trong việc săn mồi. Chúng có thể chia nhau ra tấn công con mồi từ nhiều hướng, thậm chí là dụ dỗ con mồi vào những vùng nước nông hoặc đánh bẫy các loài cá voi lớn. Các cuộc săn mồi của chúng thể hiện sự thông minh và tính xã hội cao trong nhóm. Cá voi sát thủ có mặt ở hầu hết các đại dương trên thế giới, từ các vùng nước lạnh ở Bắc Cực và Nam Cực đến các vùng biển nhiệt đới. Chúng có thể sống ở cả vùng ven bờ và vùng biển sâu, tùy thuộc vào sự phân bố của con mồi. Cá voi sát thủ có thể sống đến 50-90 năm trong tự nhiên. Cá voi sát thủ cái thường sống lâu hơn cá voi đực. Chúng có khả năng bơi rất nhanh, có thể đạt tốc độ lên đến 56 km/h khi cần thiết. Cá voi sát thủ không chỉ là loài cá voi đặc biệt vì sức mạnh và trí tuệ, mà còn là biểu tượng của một loài động vật có khả năng giao tiếp, hợp tác và duy trì các mối quan hệ xã hội phức tạp trong thế giới tự nhiên.",
    },
    {
      name: "Cá Nhà Táng",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mother_and_baby_sperm_whale.jpg/800px-Mother_and_baby_sperm_whale.jpg",
      description: "",
      detail:
        "Cá nhà táng (Physeter macrocephalus) là loài cá voi lớn, có thể dài tới 20 mét và nặng khoảng 50-60 tấn. Đặc điểm nổi bật của chúng là cái đầu lớn, chiếm một phần ba chiều dài cơ thể, và miệng rộng với hàm răng lớn. Cá nhà táng có màu sắc từ xám đến nâu đậm. Chúng sống chủ yếu ở các vùng biển sâu, săn mực khổng lồ và cá, sử dụng khả năng định vị bằng sóng âm (echolocation) để tìm mồi. Cá nhà táng là loài sinh sản theo kiểu nội thụ, sinh con mỗi 4–6 năm và chăm sóc con cái trong nhiều năm. Cá nhà táng có thể sống rất lâu, lên tới 70 năm. Mặc dù từng bị săn bắt mạnh mẽ trong quá khứ, hiện nay chúng đang được bảo vệ và duy trì số lượng trong các khu vực bảo tồn biển.",
    },
    {
      name: "Cá Heo",
      image:
        "https://img.pikbest.com/ai/illus_our/20230418/d16a0052523641b84e8ec32234aca35d.jpg!w700wp",
      description: "",
      detail:
        "'Cá heo' là tên gọi phổ biến trong tiếng Việt cho loài động vật biển có tên khoa học là dolphin (dolphin). Đây là một nhóm động vật thuộc bộ cá voi (Cetacea) và có đặc điểm nổi bật là sự thông minh cao, tính xã hội mạnh mẽ, cùng khả năng giao tiếp và hợp tác trong nhóm. Cá heo có thân hình thuôn dài, mũi nhọn, và vây lưng hình lưỡi liềm. Chúng có một đuôi rộng và mạnh mẽ để bơi nhanh. Cá heo sống chủ yếu ở đại dương, nhưng một số loài cũng có thể sống trong các vùng nước ngọt. Thức ăn chủ yếu của chúng là cá, mực và các loài sinh vật biển nhỏ. Chúng thường sống theo bầy đàn và có thể giao tiếp với nhau thông qua các âm thanh, như tiếng huýt sáo, kêu, và các tín hiệu âm thanh khác.  Cá heo được cho là một trong những loài động vật thông minh nhất, với khả năng giải quyết vấn đề và học hỏi từ kinh nghiệm.",
    },
    {
      name: "Cá Nhám Voi",
      image:
        "https://cdnmedia.baotintuc.vn/Upload/rGkvwNpj74Z1EcpzQ6ltA/files/2023/04/tuan2/ca-9423.png",
      description: "",
      detail:
        "Cá nhám voi (hay cá mập voi) là một loài cá mập khổng lồ thuộc họ Rhincodontidae, có tên khoa học là Rhincodon typus. Đây là loài cá mập lớn nhất trên thế giới, có thể đạt chiều dài lên tới 12 mét hoặc thậm chí hơn. Tuy nhiên, chúng không phải là loài cá mập ăn thịt như những loài cá mập khác, mà là loài ăn lọc. Cá nhám voi có cơ thể rất lớn, thân hình rộng và dẹt, giống như một chiếc thuyền. Chúng có chiếc miệng rất rộng, thường xuyên mở ra khi bơi để lọc nước và ăn plankton, các sinh vật phù du nhỏ. Chúng sống chủ yếu ở các vùng biển ấm, từ bề mặt cho đến độ sâu 700 mét. Chúng thường xuyên di chuyển qua các vùng biển nhiệt đới và cận nhiệt đới, bao gồm khu vực Ấn Độ Dương, Thái Bình Dương và một số vùng biển ngoài khơi Australia. Là loài ăn lọc, cá nhám voi chủ yếu ăn các loài sinh vật nhỏ như plankton, cá con và các loài động vật phù du khác. Chúng sử dụng miệng rộng của mình để hút một lượng lớn nước và sau đó lọc ra thức ăn. ",
    },
    {
      name: "San hô biển sâu",
      image:
        "https://images2.thanhnien.vn/528068263637045248/2024/1/20/2532-170572849165536556886.jpeg",
      description: "",
      detail:
        "San hô biển sâu là một loại san hô sống ở các vùng biển có độ sâu lớn, thường từ khoảng 50 mét đến 2000 mét dưới mặt nước biển. Các rạn san hô này chủ yếu được tìm thấy ở các khu vực nhiệt đới và cận nhiệt đới, nơi có nước lạnh hơn và ánh sáng mặt trời không thể chiếu tới. Chúng chủ yếu là san hô mềm (Soft Corals) hoặc san hô đá (Hard Corals) nhưng khác biệt so với các rạn san hô nổi, vì chúng không cần ánh sáng mặt trời để phát triển. Thay vào đó, chúng sống nhờ vào việc ăn các sinh vật trôi nổi trong nước, như plankton và động vật nhỏ khác. Do sống ở độ sâu lớn, nơi ánh sáng mặt trời không thể chiếu tới, các loài san hô này không sử dụng quá trình quang hợp như san hô ở rạn san hô nông. Thay vào đó, chúng phát triển nhờ vào các nguồn dinh dưỡng có trong nước, bao gồm plankton và các sinh vật phù du.  San hô biển sâu sống trong môi trường nước lạnh hơn và ít động, có dòng chảy mạnh và nước thường có độ mặn cao hơn so với các khu vực rạn san hô nông. San hô biển sâu thường phát triển rất chậm, có thể mất hàng năm để tạo thành một cấu trúc lớn. Các loài san hô này có khả năng sống lâu dài, thậm chí vài nghìn năm trong một số trường hợp.",
    },
    {
      name: "Cá Mái Chèo Khổng Lồ",
      image:
        "https://cdn-i.vtcnews.vn/resize/th/upload/2023/07/25/ca-mai-cheo-4-16032617.jpg",
      description: "",
      detail:
        "Cá mái chèo khổng lồ là một loài cá hiếm và có kích thước cực kỳ lớn, thuộc họ Oarfish (Regalecidae). Loài cá này nổi tiếng vì kích thước khổng lồ và hình dáng đặc biệt. Cá mái chèo khổng lồ có thể dài đến 15 mét hoặc hơn, khiến chúng trở thành một trong những loài cá dài nhất trong thế giới đại dương. Chúng có thân hình mảnh mai, dài và được đặc trưng bởi một vây lưng rất dài, giúp cá dễ dàng bơi lội trong đại dương sâu. Loài cá này có thể dài từ 3 đến 15 mét, với cá trưởng thành có thể nặng từ 200 đến 300 kg. Thân dài, mảnh mai, hình dạng cơ thể giống như một 'mái chèo', với một vây lưng dài nổi bật trên cơ thể. Cá mái chèo khổng lồ thường có màu bạc hoặc xám ánh kim, giúp chúng hòa mình vào ánh sáng yếu của đại dương sâu. Chúng sống ở vùng nước sâu và hiếm khi xuất hiện ở khu vực gần bờ. Do đó, cá mái chèo khổng lồ rất ít được con người quan sát trực tiếp trong tự nhiên. Loài cá này chủ yếu ăn các loài động vật phù du và những sinh vật nhỏ khác trôi nổi trong nước.",
    },
    {
      name: "Cá Chuồn",
      image: "https://cdn.tgdd.vn/2021/07/CookProduct/chuon-1-1200x676.jpg",
      description: "",
      detail:
        "Cá chuồn (hay còn gọi là cá bay) là một loài cá có khả năng 'bay' hoặc 'lướt' trên mặt nước, nhờ vào vây ngực phát triển đặc biệt giúp chúng có thể vọt lên không trung và lướt một quãng đường dài trên mặt nước. Cá chuồn thuộc họ Exocoetidae, và có hơn 70 loài khác nhau. Chúng có thân hình thon dài, vảy sáng bóng và đặc biệt là đôi vây ngực phát triển lớn, giống như cánh. Chúng có thể mở rộng các vây này như cánh chim, giúp chúng bay được một quãng đường ngắn. Cá chuồn có khả năng 'bay' hoặc 'lướt' trên mặt nước trong một quãng đường dài từ vài mét đến vài trăm mét, tuỳ vào loài và điều kiện nước. Khi cần tránh kẻ săn mồi hoặc tìm kiếm thức ăn, chúng sẽ nhảy lên khỏi mặt nước, mở rộng vây và 'lướt trong không khí'. Cá chuồn thường sống ở các vùng biển ấm, đặc biệt là các khu vực có sóng lớn, nơi chúng có thể sử dụng sóng để hỗ trợ khả năng bay của mình. Chúng thường bơi theo đàn và có thể di chuyển với tốc độ khá nhanh dưới nước. Cá chuồn chủ yếu ăn các loài động vật nhỏ dưới nước như zooplankton, cá nhỏ và các sinh vật phù du.",
    },
  ];

  // Hàm để hiển thị thông tin chi tiết của loài cá khi người dùng click vào ảnh
  const handleFishClick = (fish) => {
    setSelectedFish(fish);
  };

  const handleBackClick = () => {
    setSelectedFish(null);
  };

  return (
    <div className="fish-info-container">
      <h1>THÔNG TIN VỀ CÁC LOÀI CÁ DƯỚI ĐẠI DƯƠNG</h1>

      {/* Nếu có loài cá được chọn, hiển thị thông tin chi tiết ở đầu trang */}
      {selectedFish ? (
        <div className="fish-detail">
          <button onClick={handleBackClick}>Quay lại</button>
          <h2>{selectedFish.name}</h2>
          <p>
            <strong>Thông Tin Chi Tiết:</strong> {selectedFish.detail}
          </p>
          <img src={selectedFish.image} alt={selectedFish.name} />
        </div>
      ) : (
        <div className="fish-list">
          {/* Hiển thị danh sách các loài cá khi chưa chọn */}
          {fishData.map((fish) => (
            <div key={fish.name} className="fish-item">
              <img
                src={fish.image}
                alt={fish.name}
                onClick={() => handleFishClick(fish)}
              />
              <p>{fish.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FishInfo;
