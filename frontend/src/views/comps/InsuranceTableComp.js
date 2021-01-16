import React from 'react'

const InsuranceTableComp = () => {
    return (
        <div class="table-responsive">
            <table class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle">
            <thead class="thead-light">
                <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Country</th>
                <th>Status</th>
                <th>Favorite</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <td>
                    <a class="media align-items-center" href="user-profile.html">
                    <div class="media-body">
                        <span class="d-block h5 text-hover-primary mb-0">Amanda Harvey <i class="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></span>
                        <span class="d-block font-size-sm text-body">amanda@example.com</span>
                    </div>
                    </a>
                </td>
                <td>
                    <span class="d-block h5 mb-0">Director</span>
                    <span class="d-block font-size-sm">Human resources</span>
                </td>
                <td>United Kingdom <span class="text-hide">Code: GB</span></td>
                <td>
                    <span class="legend-indicator bg-success"></span>Active
                </td>
                <td class="text-center">
                    <div class="custom-control custom-checkbox-bookmark">
                    <label class="custom-checkbox-bookmark-label" for="favoriteCheckbox1">
                        <span class="custom-checkbox-bookmark-default">
                        <i class="tio-star-outlined"></i>
                        </span>
                        <span class="custom-checkbox-bookmark-active">
                        <i class="tio-star"></i>
                        </span>
                    </label>
                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <a class="media align-items-center" href="user-profile.html">
                    <div class="avatar avatar-soft-primary avatar-circle mr-3">
                        <span class="avatar-initials">A</span>
                    </div>
                    <div class="media-body">
                        <span class="d-block h5 text-hover-primary mb-0">Anne Richard</span>
                        <span class="d-block font-size-sm text-body">anne@example.com</span>
                    </div>
                    </a>
                </td>
                <td>
                    <span class="d-block h5 mb-0">Seller</span>
                    <span class="d-block font-size-sm">Branding products</span>
                </td>
                <td>United States <span class="text-hide">Code: US</span></td>
                <td>
                    <span class="legend-indicator bg-warning"></span>Pending
                </td>
                <td class="text-center">
                    <div class="custom-control custom-checkbox-bookmark">
                    <label class="custom-checkbox-bookmark-label" for="favoriteCheckbox2">
                        <span class="custom-checkbox-bookmark-default">
                        <i class="tio-star-outlined"></i>
                        </span>
                        <span class="custom-checkbox-bookmark-active">
                        <i class="tio-star"></i>
                        </span>
                    </label>
                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <a class="media align-items-center" href="user-profile.html">
                    <div class="media-body">
                        <span class="d-block h5 text-hover-primary mb-0">David Harrison</span>
                        <span class="d-block font-size-sm text-body">david@example.com</span>
                    </div>
                    </a>
                </td>
                <td>
                    <span class="d-block h5 mb-0">Unknown</span>
                    <span class="d-block font-size-sm">Unknown</span>
                </td>
                <td>United States <span class="text-hide">Code: US</span></td>
                <td>
                    <span class="legend-indicator bg-success"></span>Active
                </td>
                <td class="text-center">
                    <div class="custom-control custom-checkbox-bookmark">
                    <label class="custom-checkbox-bookmark-label" for="favoriteCheckbox3">
                        <span class="custom-checkbox-bookmark-default">
                        <i class="tio-star-outlined"></i>
                        </span>
                        <span class="custom-checkbox-bookmark-active">
                        <i class="tio-star"></i>
                        </span>
                    </label>
                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <a class="media align-items-center" href="user-profile.html">
                    <div class="media-body">
                        <span class="d-block h5 text-hover-primary mb-0">Finch Hoot</span>
                        <span class="d-block font-size-sm text-body">finch@example.com</span>
                    </div>
                    </a>
                </td>
                <td>
                    <span class="d-block h5 mb-0">Designer</span>
                    <span class="d-block font-size-sm">IT department</span>
                </td>
                <td>Argentina <span class="text-hide">Code: AR</span></td>
                <td>
                    <span class="legend-indicator bg-danger"></span>Suspended
                </td>
                <td class="text-center">
                    <div class="custom-control custom-checkbox-bookmark">
                    <label class="custom-checkbox-bookmark-label" for="favoriteCheckbox4">
                        <span class="custom-checkbox-bookmark-default">
                        <i class="tio-star-outlined"></i>
                        </span>
                        <span class="custom-checkbox-bookmark-active">
                        <i class="tio-star"></i>
                        </span>
                    </label>
                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <a class="media align-items-center" href="user-profile.html">
                    <div class="avatar avatar-soft-dark avatar-circle mr-3">
                        <span class="avatar-initials">B</span>
                    </div>
                    <div class="media-body">
                        <span class="d-block h5 text-hover-primary mb-0">Bob Dean</span>
                        <span class="d-block font-size-sm text-body">bob@example.com</span>
                    </div>
                    </a>
                </td>
                <td>
                    <span class="d-block h5 mb-0">Executive director</span>
                    <span class="d-block font-size-sm">Marketing</span>
                </td>
                <td>Austria <span class="text-hide">Code: AT</span></td>
                <td>
                    <span class="legend-indicator bg-success"></span>Active
                </td>
                <td class="text-center">
                    <div class="custom-control custom-checkbox-bookmark">
                    <label class="custom-checkbox-bookmark-label" for="favoriteCheckbox5">
                        <span class="custom-checkbox-bookmark-default">
                        <i class="tio-star-outlined"></i>
                        </span>
                        <span class="custom-checkbox-bookmark-active">
                        <i class="tio-star"></i>
                        </span>
                    </label>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default InsuranceTableComp