"use client";
import Image from "next/image";
import styles from "./Card.module.scss";
import { VendorShape } from "@/app/utils/dataShapes";

export const Card = ({ data }: { data: VendorShape }) => (
  <a target="_blank" href={data.menuUrl} className={styles.card}>
    <div className={styles.header}>
      <img
        className={styles.banner}
        alt={data.title}
        src={data.backgroundImage}
      />

      <img className={styles.logo} alt={data.title} src={data.logo} />
    </div>

    <div className={styles.details}>
      <div className={styles.restaurantInfo}>
        <div className={styles.restaurantName}>
          <h3>{data.title}</h3>
          <div className={styles.discountBadge}>
            تا
            {data.discountValueForView} %
          </div>
          <div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.66667 8.16699C4.98883 8.16699 5.25 8.42816 5.25 8.75033V9.33366C5.25 9.97799 5.77233 10.5003 6.41667 10.5003H7C7.32217 10.5003 7.58333 10.7615 7.58333 11.0837C7.58333 11.4058 7.32217 11.667 7 11.667H6.41667C5.77233 11.667 5.25 12.1893 5.25 12.8337V13.417C5.25 13.7392 4.98883 14.0003 4.66667 14.0003C4.3445 14.0003 4.08333 13.7392 4.08333 13.417V12.8337C4.08333 12.1893 3.561 11.667 2.91667 11.667H2.33333C2.01117 11.667 1.75 11.4058 1.75 11.0837C1.75 10.7615 2.01117 10.5003 2.33333 10.5003H2.91667C3.561 10.5003 4.08333 9.97799 4.08333 9.33366V8.75033C4.08333 8.42816 4.3445 8.16699 4.66667 8.16699ZM4.66667 10.8771C4.60216 10.9501 4.53315 11.0192 4.46006 11.0837C4.53315 11.1482 4.60216 11.2172 4.66667 11.2903C4.73117 11.2172 4.80019 11.1482 4.87327 11.0837C4.80019 11.0192 4.73117 10.9501 4.66667 10.8771Z"
                fill="url(#paint0_linear)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 0C3.82217 0 4.08333 0.261167 4.08333 0.583333V1.16667C4.08333 2.13316 4.86684 2.91667 5.83333 2.91667H6.41667C6.73883 2.91667 7 3.17783 7 3.5C7 3.82217 6.73883 4.08333 6.41667 4.08333H5.83333C4.86684 4.08333 4.08333 4.86684 4.08333 5.83333V6.41667C4.08333 6.73883 3.82217 7 3.5 7C3.17783 7 2.91667 6.73883 2.91667 6.41667V5.83333C2.91667 4.86684 2.13316 4.08333 1.16667 4.08333H0.583333C0.261167 4.08333 0 3.82217 0 3.5C0 3.17783 0.261167 2.91667 0.583333 2.91667H1.16667C2.13316 2.91667 2.91667 2.13316 2.91667 1.16667V0.583333C2.91667 0.261167 3.17783 0 3.5 0ZM3.5 2.91695C3.33415 3.1377 3.1377 3.33415 2.91695 3.5C3.1377 3.66585 3.33415 3.8623 3.5 4.08305C3.66585 3.8623 3.8623 3.66585 4.08305 3.5C3.8623 3.33415 3.66585 3.1377 3.5 2.91695Z"
                fill="url(#paint1_linear)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.33335 2.33301C9.65552 2.33301 9.91669 2.59417 9.91669 2.91634V3.49967C9.91669 5.1105 11.2225 6.41634 12.8334 6.41634H13.4167C13.7389 6.41634 14 6.67751 14 6.99967C14 7.32184 13.7389 7.58301 13.4167 7.58301H12.8334C11.2225 7.58301 9.91669 8.88884 9.91669 10.4997V11.083C9.91669 11.4052 9.65552 11.6663 9.33335 11.6663C9.01119 11.6663 8.75002 11.4052 8.75002 11.083V10.4997C8.75002 8.88884 7.44418 7.58301 5.83335 7.58301H5.25002C4.92785 7.58301 4.66669 7.32184 4.66669 6.99967C4.66669 6.67751 4.92785 6.41634 5.25002 6.41634H5.83335C7.44418 6.41634 8.75002 5.1105 8.75002 3.49967V2.91634C8.75002 2.59417 9.01119 2.33301 9.33335 2.33301ZM9.33335 5.6041C8.98914 6.17535 8.50903 6.65546 7.93778 6.99967C8.50903 7.34389 8.98914 7.824 9.33335 8.39525C9.67757 7.824 10.1577 7.34389 10.7289 6.99967C10.1577 6.65546 9.67757 6.17535 9.33335 5.6041Z"
                fill="url(#paint2_linear)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="8.16667"
                  y1="14.0003"
                  x2="2.33333"
                  y2="8.16699"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00D170"></stop>
                  <stop offset="1" stopColor="#00D170" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="7"
                  y1="7"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A3A3A3"></stop>
                  <stop offset="1" stopColor="#A3A3A3" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="14"
                  y1="11.6663"
                  x2="4.66669"
                  y2="2.33301"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF00A4"></stop>
                  <stop offset="1" stopColor="#FF00A4" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <div className={styles.restaurantScore}>
                  <span className={styles.countReview}>
                    ({data.countReview.toLocaleString()})
                  </span>
                  <div className={styles.rate}>
                    <span>{data.rate}</span>&nbsp;
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M5.55159 0.9086C5.735 0.536977 6.26492 0.536977 6.44833 0.9086L7.76331 3.57306L10.7037 4.00032C11.1138 4.05991 11.2776 4.5639 10.9808 4.85317L8.85313 6.92716L9.35541 9.85568C9.42546 10.2641 8.99675 10.5756 8.62993 10.3828L5.99996 9.00011L3.36998 10.3828C3.00317 10.5756 2.57445 10.2641 2.64451 9.85568L3.14679 6.92716L1.01909 4.85317C0.722336 4.5639 0.88609 4.05991 1.2962 4.00032L4.2366 3.57306L5.55159 0.9086Z"
                          fill="var(--starcolor-default)"
                        ></path>
                        <path
                          d="M5.55159 0.9086C5.735 0.536977 6.26492 0.536977 6.44833 0.9086L7.76331 3.57306L10.7037 4.00032C11.1138 4.05991 11.2776 4.5639 10.9808 4.85317L8.85313 6.92716L9.35541 9.85568C9.42546 10.2641 8.99675 10.5756 8.62993 10.3828L5.99996 9.00011L3.36998 10.3828C3.00317 10.5756 2.57445 10.2641 2.64451 9.85568L3.14679 6.92716L1.01909 4.85317C0.722336 4.5639 0.88609 4.05991 1.2962 4.00032L4.2366 3.57306L5.55159 0.9086Z"
                          fill="var(--starcolor-default)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>{data.description}</div>
      <div className={styles.delivery}>
        <div>
          <div>
            <span className={styles.deliveryType}>
              {data.isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده"}{" "}
            </span>
            <span className={styles.deliveryFee}>
              {data.deliveryFee.toLocaleString()}
            </span>
            <span>تومان</span>
          </div>
        </div>
        {data.eta > 0 && <div>تا {data.eta} دقیقه</div>}
      </div>
    </div>
  </a>
);
