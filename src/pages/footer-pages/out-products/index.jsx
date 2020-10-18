import React from 'react';

import './style.scss';

const OurProducts = () => {
  return (
    <div className='container-products'>
      <h1>У нас на сайті Ви знайдете:</h1>
      <h3>
        <span className='bold-word'>Чоловічий, жіночий та дитячий одяг відмінної якості</span>
      </h3>
      <p>
        Величезний набір базових моделей на кожен день. Розмірна сітка включає розміри від XS до 3XL. Дитячий одяг
        представлений ​​моделями для новонароджених (2–24 місяці), для дівчаток і хлопчиків 2–16 років.
      </p>
      <h3>
        <span className='bold-word'>Величезний вибір домашнього текстилю</span>
      </h3>
      <p>
        З допомогою продукції бренду можна швидко і стильно облаштувати спальну кімнату та ванну кімнату за допомогою
        якісного домашнього текстилю. Тут Ви знайдете великий вибір віконних штор, штор для душу, комплектів постільної
        білизни з натуральних або синтетичних матеріалів, а також рушників відмінної якості.
      </p>
      <h2>РОЗМІРНІ СІТКИ</h2>
      <h3>
        <p style={{ marginTop: '50px' }}>
          <span>ЖІНОЧИЙ ОДЯГ (Esmara, Blue motion)</span>
        </p>
        <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <tr>
            <th>Розмір</th>
            <th>Груди(см)</th>
            <th>Талія(см)</th>
            <th>Бедра(см)</th>
          </tr>
          <tr>
            <td>XS: 32</td>
            <td>74-77</td>
            <td>61-63</td>
            <td>84-87</td>
          </tr>
          <tr>
            <td>XS: 34</td>
            <td>78-81</td>
            <td>64-66</td>
            <td>88-91</td>
          </tr>
          <tr>
            <td>S: 36</td>
            <td>82-85</td>
            <td>67-70</td>
            <td>92-95</td>
          </tr>
          <tr>
            <td>S: 38</td>
            <td>86-89</td>
            <td>71-74</td>
            <td>96-98</td>
          </tr>
          <tr>
            <td>M: 40</td>
            <td>90-93</td>
            <td>75-78</td>
            <td>99-101</td>
          </tr>
          <tr>
            <td>M: 42</td>
            <td>94-97</td>
            <td>79-82</td>
            <td>102-104</td>
          </tr>
          <tr>
            <td>L: 44</td>
            <td>98-102</td>
            <td>83-87</td>
            <td>105-108</td>
          </tr>
          <tr>
            <td>L: 46</td>
            <td>103-107</td>
            <td>88-93</td>
            <td>109-112</td>
          </tr>
          <tr>
            <td>XL: 48</td>
            <td>108-113</td>
            <td>94-99</td>
            <td>113-116</td>
          </tr>
          <tr>
            <td>XL: 50</td>
            <td>114-119</td>
            <td>100-106</td>
            <td>117-121</td>
          </tr>
          <tr>
            <td>XXL: 52</td>
            <td>120-125</td>
            <td>107-112</td>
            <td>122-126</td>
          </tr>
          <tr>
            <td>XXL: 54</td>
            <td>126-131</td>
            <td>113-119</td>
            <td>127-132</td>
          </tr>
        </table>
        <p style={{ marginTop: '50px' }}>
          <span>ЧОЛОВІЧИЙ ОДЯГ (Livergy, Watsons)</span>
        </p>
        <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <tr>
            <th>Розмір</th>
            <th>Груди(см)</th>
            <th>Талія(см)</th>
            <th>Довжина штанини(см)</th>
          </tr>
          <tr>
            <td>S: 44</td>
            <td>86-89</td>
            <td>74-77</td>
            <td>99-102</td>
          </tr>
          <tr>
            <td>S: 46</td>
            <td>90-93</td>
            <td>78-81</td>
            <td>101-104</td>
          </tr>
          <tr>
            <td>M: 48</td>
            <td>94-97</td>
            <td>82-85</td>
            <td>103-106</td>
          </tr>
          <tr>
            <td>M: 50</td>
            <td>98-101</td>
            <td>86-89</td>
            <td>105-108</td>
          </tr>
          <tr>
            <td>L: 52</td>
            <td>102-105</td>
            <td>90-94</td>
            <td>107-109</td>
          </tr>
          <tr>
            <td>L: 54</td>
            <td>106-109</td>
            <td>95-99</td>
            <td>108-110</td>
          </tr>
          <tr>
            <td>XL: 56</td>
            <td>110-113</td>
            <td>100-104</td>
            <td>109-112</td>
          </tr>
          <tr>
            <td>XL: 58</td>
            <td>114-117</td>
            <td>105-109</td>
            <td>111-114</td>
          </tr>
          <tr>
            <td>XXL: 60</td>
            <td>118-121 </td>
            <td>110-115</td>
            <td>113-116</td>
          </tr>
          <tr>
            <td>XXL: 62</td>
            <td>122-125 </td>
            <td>116-121</td>
            <td>115-118</td>
          </tr>
        </table>
        <p style={{ marginTop: '50px' }}>
          <span>ТЕРМОБІЛИЗНА ЖІНОЧА (Crivit, Crane)</span>
        </p>
        <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <tr>
            <th>Розмір</th>
            <th>Зріст(см)</th>
            <th>Вага(кг)</th>
            <th>Груди(см)</th>
            <th>Талія(см)</th>
            <th>Бедра(см)</th>
            <th>Укр.розмір</th>
          </tr>
          <tr>
            <td>XS</td>
            <td>155-164</td>
            <td>45-50</td>
            <td>80-86</td>
            <td>55-60</td>
            <td>86-90</td>
            <td>40-42</td>
          </tr>
          <tr>
            <td>S</td>
            <td>155-164</td>
            <td>50-58</td>
            <td>85-92</td>
            <td>60-70</td>
            <td>90-94</td>
            <td>42-44</td>
          </tr>
          <tr>
            <td>M</td>
            <td>160-170</td>
            <td>55-68</td>
            <td>92-100</td>
            <td>68-78</td>
            <td>92-100</td>
            <td>46-48</td>
          </tr>
          <tr>
            <td>L</td>
            <td>165-175</td>
            <td>65-80</td>
            <td>98+</td>
            <td>76+</td>
            <td>110-113</td>
            <td>48-50</td>
          </tr>
        </table>
        <p style={{ marginTop: '50px' }}>
          <span>ТЕРМОБІЛИЗНА ЧОЛОВІЧА (Crivit, Crane)</span>
        </p>
        <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <tr>
            <th>Розмір</th>
            <th>Зріст(см)</th>
            <th>Вага(кг)</th>
            <th>Груди(см)</th>
            <th>Талія(см)</th>
            <th>Бедра(см)</th>
            <th>Укр.розмір</th>
          </tr>
          <tr>
            <td>M</td>
            <td>160-180</td>
            <td>60-75</td>
            <td>90-100</td>
            <td>70-85</td>
            <td>80-95</td>
            <td>46-50</td>
          </tr>
          <tr>
            <td>L</td>
            <td>170-185</td>
            <td>70-85</td>
            <td>95-110</td>
            <td>80-95</td>
            <td>90-105</td>
            <td>48-52</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>175-190</td>
            <td>80-100</td>
            <td>105-115</td>
            <td>90-105</td>
            <td>95-115</td>
            <td>52-56</td>
          </tr>
        </table>
      </h3>
    </div>
  );
};

export default OurProducts;
