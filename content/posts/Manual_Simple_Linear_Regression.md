---
title: "Simple Linear Regression without Gradient Descent Optimization"
tags: ["Prose", "Tech", "Python", "AI/ML"]
date: 2019-01-01T00:21:00+05:30
publishdate: 2019-01-01T02:17:36+05:30
# draft: true
---

# Linear Regression in a different way

Trying to implement linear regression for a simple dataset without using existing regression library functions or the Gradient Decent Technique

## Theory

### Regression

> A method of establishing relationship between 1 or more independant variables against one dependant variable

### Linear Regression

> Establishing a **Linear** relationship

Let's try implementing the same:

Import the Google Drive to access your dataset

```python
from google.colab import drive

drive.mount('/content/drive')
```

    Drive already mounted at /content/drive; to attempt to forcibly remount, call drive.mount("/content/drive", force_remount=True).

```python
import numpy as np
import pandas as pd
```

Reading the data

```python
df = pd.read_csv('/content/drive/My Drive/slr_data.csv')
```

```python
df.head()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>x</th>
      <th>y</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>77</td>
      <td>79.775152</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21</td>
      <td>23.177279</td>
    </tr>
    <tr>
      <th>2</th>
      <td>22</td>
      <td>25.609262</td>
    </tr>
    <tr>
      <th>3</th>
      <td>20</td>
      <td>17.857388</td>
    </tr>
    <tr>
      <th>4</th>
      <td>36</td>
      <td>41.849864</td>
    </tr>
  </tbody>
</table>
</div>

```python
df.describe()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>x</th>
      <th>y</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>300.000000</td>
      <td>300.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.936667</td>
      <td>51.205051</td>
    </tr>
    <tr>
      <th>std</th>
      <td>28.504286</td>
      <td>29.071481</td>
    </tr>
    <tr>
      <th>min</th>
      <td>0.000000</td>
      <td>-3.467884</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>27.000000</td>
      <td>25.676502</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>53.000000</td>
      <td>52.170557</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>73.000000</td>
      <td>74.303007</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>105.591837</td>
    </tr>
  </tbody>
</table>
</div>

```python
import matplotlib.pyplot as plt
import seaborn as sns
```

```python
plt.figure(figsize = (20,10))

sns.relplot(x = 'x', y = 'y', data = df)

plt.show()
```

    <Figure size 1440x720 with 0 Axes>

![png](/img/output_13_1.png)

Linear Regression is all about finding a straight line that has the least **Root Mean Square Value** for the given data points => the line is to be existing between the extreme Y values to make sure the line is between the points in a given dataset

```python
y_max = df.y.max()
```

```python
y_min = df.y.min()
```

```python
y_max
```

    105.5918375

```python
y_min
```

    -3.4678837889999996

```python
y_mid = (y_max + y_min) / 2
```

```python
y_mid
```

    51.0619768555

```python
x2 = df.x.max()
```

```python
x1 = df.x.min()
```

```python
df.x.idxmax()
```

    87

```python
df.x.idxmin()
```

    55

```python
y2 = df.y[df.x.idxmax()]
```

```python
y1 = df.y[df.x.idxmin()]
```

```python
y2
```

    105.5918375

```python
y1
```

    -1.040114209

```python
slope_m = (y2 - y1) / (x2 - x1)
```

```python
slope_m
```

    1.06631951709

```python
def lin_equ(x):
    return slope_m*(x - (df.x[df.y.idxmax()] + df.x[df.y.idxmin()]) / 2) + (df.y[df.y.idxmax()] + df.y[df.y.idxmin()]) / 2
```

```python
df.head()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>x</th>
      <th>y</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>77</td>
      <td>79.775152</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21</td>
      <td>23.177279</td>
    </tr>
    <tr>
      <th>2</th>
      <td>22</td>
      <td>25.609262</td>
    </tr>
    <tr>
      <th>3</th>
      <td>20</td>
      <td>17.857388</td>
    </tr>
    <tr>
      <th>4</th>
      <td>36</td>
      <td>41.849864</td>
    </tr>
  </tbody>
</table>
</div>

```python
lin_equ(77)
```

    79.85260381693

```python
lin_equ(21)
```

    20.13871085989

```python
lin_equ(22)
```

    21.20503037698

```python
lin_equ(20)
```

    19.0723913428

```python
lin_equ(36)
```

    36.13350361624

```python
df['y_pred'] = pd.Series(map(lin_equ, df.x.values))
```

```python
df.head()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>x</th>
      <th>y</th>
      <th>y_pred</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>77</td>
      <td>79.775152</td>
      <td>79.852604</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21</td>
      <td>23.177279</td>
      <td>20.138711</td>
    </tr>
    <tr>
      <th>2</th>
      <td>22</td>
      <td>25.609262</td>
      <td>21.205030</td>
    </tr>
    <tr>
      <th>3</th>
      <td>20</td>
      <td>17.857388</td>
      <td>19.072391</td>
    </tr>
    <tr>
      <th>4</th>
      <td>36</td>
      <td>41.849864</td>
      <td>36.133504</td>
    </tr>
  </tbody>
</table>
</div>

```python
plt.figure(figsize = (20,15))

sns.relplot(x = 'x', y = 'y_pred', data = df)

plt.show()
```

    <Figure size 1440x1080 with 0 Axes>

![png](/img/output_40_1.png)

```python
plt.figure(figsize = (20,15))

sns.relplot(x = 'x', y = 'y', data = df)

sns.lineplot(x = 'x', y = 'y_pred', data = df)

plt.show()
```

    <Figure size 1440x1080 with 0 Axes>

![png](/img/output_41_1.png)

```python
neg_err_sum = sum([i*i for i in df.y_pred-df.y if i < 0])
```

```python
pos_err_sum = sum([i*i for i in df.y_pred-df.y if i >= 0])
```

```python
neg_err_sum
```

    1228.4737143905872

```python
pos_err_sum
```

    2396.9837025596657

```python

```
