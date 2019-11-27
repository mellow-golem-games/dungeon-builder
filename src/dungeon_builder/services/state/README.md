# STATE

## Overview

This folder contains the methods for setting up and modifying state for your application. State is
held in the atom ````app-state```` which can be imported where needed in your application.
The key piece here is the ````dispatcher```` which is a multimethod that dispatche baed on
````{:type "string" :value "string"}```` This allows you to compose your state mutations in different
files, and then use them through a single function call throughout your application. 